import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
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

        {/* Testimonials Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              variants={cardVariants}
              className="relative bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border group"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              {/* Quote Icon */}
              <motion.div 
                className="absolute -top-4 -left-2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-md"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <Quote size={20} className="text-secondary-foreground" />
              </motion.div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <Star 
                      size={18} 
                      className="text-secondary fill-secondary" 
                    />
                  </motion.div>
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
          ))}
        </motion.div>

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
              {testimonials.map((t) => (
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
