import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    location: "São Paulo, SP",
    rating: 5,
    text: "Produto incrível! Meu piso nunca ficou tão brilhante. Super concentrado, rende muito e o cheiro é ótimo. Recomendo demais!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "João Santos",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    text: "Comprei o kit com 2 galões e não me arrependo. Limpou manchas que eu achava impossíveis de tirar. Virei cliente fiel!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Ana Costa",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "Uso em toda minha casa - pisos, banheiros, azulejos. Resultado profissional com um preço justo. Melhor produto que já usei!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Carlos Oliveira",
    location: "Curitiba, PR",
    rating: 5,
    text: "Excelente custo-benefício! Uma pequena quantidade limpa uma área enorme. Minha esposa adorou o resultado.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Fernanda Lima",
    location: "Salvador, BA",
    rating: 5,
    text: "Finalmente achei um produto que realmente funciona! O brilho dura dias e a fragrância é muito agradável.",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  // Get visible testimonials (current and adjacent for desktop)
  const getVisibleIndices = () => {
    const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const next = (currentIndex + 1) % testimonials.length;
    return [prev, currentIndex, next];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            O que nossos <span className="text-primary">clientes</span> dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mais de 1000 clientes satisfeitos em todo o Brasil. 
            Veja o que eles têm a dizer sobre o Max Brilho.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonials Grid */}
          <div className="flex justify-center items-center gap-6 px-8">
            {/* Desktop: Show 3 cards */}
            <div className="hidden md:flex gap-6 items-center">
              {visibleIndices.map((index, i) => {
                const testimonial = testimonials[index];
                const isCenter = i === 1;
                
                return (
                  <motion.div 
                    key={testimonial.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: isCenter ? 1 : 0.6, 
                      scale: isCenter ? 1 : 0.85,
                      y: isCenter ? 0 : 20,
                    }}
                    transition={{ duration: 0.4 }}
                    className={`relative bg-card rounded-2xl p-6 shadow-lg border border-border ${
                      isCenter ? 'w-96 z-10' : 'w-80'
                    }`}
                  >
                    {/* Quote Icon */}
                    <div className="absolute -top-4 -left-2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-md">
                      <Quote size={20} className="text-secondary-foreground" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4 mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i}
                          size={18} 
                          className="text-secondary fill-secondary" 
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t border-border">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-secondary/30"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile: Show 1 card */}
            <div className="md:hidden w-full">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-card rounded-2xl p-6 shadow-lg border border-border"
                >
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -left-2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-md">
                    <Quote size={20} className="text-secondary-foreground" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4 mt-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star 
                        key={i}
                        size={18} 
                        className="text-secondary fill-secondary" 
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-secondary/30"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div 
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 3).map((t) => (
                <img 
                  key={t.id}
                  src={t.image} 
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-background"
                  loading="lazy"
                />
              ))}
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold border-2 border-background">
                +997
              </div>
            </div>
            <span className="text-muted-foreground text-sm">
              clientes satisfeitos
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-secondary fill-secondary" />
              ))}
            </div>
            <span className="text-muted-foreground text-sm">
              4.9/5 avaliação média
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
