import antesDepois from "@/assets/antes-depois.jpg";
import { Sparkles, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={antesDepois} 
          alt="Antes e Depois da Limpeza com Max Brilho" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
      </div>

      {/* Labels Antes/Depois */}
      <div className="absolute top-1/2 left-0 right-0 z-10 hidden md:flex justify-between px-8 transform -translate-y-1/2">
        <div className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold text-xl shadow-lg">
          ANTES
        </div>
        <div className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-bold text-xl shadow-lg">
          DEPOIS
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-secondary" size={24} />
            <span className="text-secondary font-semibold uppercase tracking-wider">
              Limpeza Profissional
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight">
            Brilho <span className="text-gradient-gold">Máximo</span> para seus Pisos
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Produto super concentrado para limpeza de pisos, azulejos, louças, plásticos, 
            mármores, metais e banheiros. <strong>Resultado garantido!</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#produtos"
              className="inline-flex items-center justify-center gap-2 bg-cta-gradient text-accent-foreground px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all sparkle-effect"
            >
              <Sparkles size={20} />
              Ver Produtos
            </a>
            <a 
              href="https://www.instagram.com/maxbrilho_produto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground border-2 border-primary-foreground/50 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-foreground/30 transition-all"
            >
              Comprar Agora
            </a>
          </div>

          {/* Features */}
          <div className="mt-12 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <div className="w-3 h-3 rounded-full bg-secondary" />
              <span>Super Concentrado</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <div className="w-3 h-3 rounded-full bg-secondary" />
              <span>Rende 30m²</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <div className="w-3 h-3 rounded-full bg-secondary" />
              <span>Multiuso</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ArrowDown className="text-primary-foreground/60" size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
