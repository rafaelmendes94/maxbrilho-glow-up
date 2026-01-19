import { motion } from "framer-motion";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import antesDepoisImg1 from "@/assets/antes-depois-novo.jpg";
import antesDepoisImg2 from "@/assets/antes-depois-ceramica.jpg";
import antesDepoisImg3 from "@/assets/antes-depois-pedra.jpg";

const images = [
  {
    src: antesDepoisImg1,
    alt: "Antes e depois - Piso porcelanato",
    title: "Porcelanato",
  },
  {
    src: antesDepoisImg2,
    alt: "Antes e depois - Piso cerâmica",
    title: "Cerâmica",
  },
  {
    src: antesDepoisImg3,
    alt: "Antes e depois - Piso de pedra",
    title: "Pedra Natural",
  },
];

const BeforeAfterSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="antes-depois" className="py-20 bg-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Transformação Real
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">
            Veja o <span className="text-gradient-gold">Antes e Depois</span>
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Resultados reais com Max Brilho. Seu piso vai brilhar como nunca!
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-secondary/90 hover:bg-secondary text-secondary-foreground rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-secondary/90 hover:bg-secondary text-secondary-foreground rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={28} />
          </button>

          {/* Image Container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-3 md:p-4 shadow-2xl mx-8 md:mx-0">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                  loading="lazy"
                />
                {/* Before/After Labels */}
                <div className="absolute inset-0 flex">
                  <div className="flex-1 flex items-end justify-center pb-4">
                    <span className="bg-red-500 text-white px-4 py-1.5 rounded-full font-bold text-sm shadow-lg">
                      ANTES
                    </span>
                  </div>
                  <div className="flex-1 flex items-end justify-center pb-4">
                    <span className="bg-green-500 text-white px-4 py-1.5 rounded-full font-bold text-sm shadow-lg">
                      DEPOIS
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-center py-3 font-bold text-lg text-gray-800">
                {images[currentIndex].title}
              </p>
            </div>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-secondary w-8"
                    : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Benefits below image */}
        <motion.div 
          className="mt-12 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-primary-foreground">
            <Sparkles size={20} className="text-secondary" />
            <span>Brilho Instantâneo</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground">
            <Sparkles size={20} className="text-secondary" />
            <span>Remove Manchas Difíceis</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground">
            <Sparkles size={20} className="text-secondary" />
            <span>Resultado Profissional</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;