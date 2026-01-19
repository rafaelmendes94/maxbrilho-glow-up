import antesDepois from "@/assets/antes-depois.jpg";
import { Sparkles, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={antesDepois} 
          alt="Antes e Depois da Limpeza com Max Brilho - Piso brilhando" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-12 md:py-20 min-h-screen flex items-center">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <Sparkles className="text-secondary" size={20} />
            <span className="text-secondary font-semibold uppercase tracking-wider text-xs md:text-sm">
              Limpeza Profissional
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary-foreground mb-4 md:mb-6 leading-tight">
            Brilho <span className="text-gradient-gold">Máximo</span> para seus Pisos
          </h1>

          <p className="text-base md:text-xl text-primary-foreground/90 mb-6 md:mb-8 leading-relaxed">
            Produto super concentrado para limpeza de pisos, azulejos, louças, plásticos, 
            mármores, metais e banheiros. <strong>Resultado garantido!</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <motion.a 
              href="#produtos"
              className="inline-flex items-center justify-center gap-2 bg-cta-gradient text-accent-foreground px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all sparkle-effect cta-pulse"
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles size={18} />
              Ver Produtos
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/maxbrilho_produto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground border-2 border-primary-foreground/50 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-primary-foreground/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Comprar Agora
            </motion.a>
          </div>

          {/* Features */}
          <div className="mt-8 md:mt-12 flex flex-wrap gap-4 md:gap-6">
            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm md:text-base">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-secondary" />
              <span>Super Concentrado</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm md:text-base">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-secondary" />
              <span>Rende 30m²</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm md:text-base">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-secondary" />
              <span>Multiuso</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div 
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowDown className="text-primary-foreground/60" size={28} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
