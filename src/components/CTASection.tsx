import { Instagram, Sparkles } from "lucide-react";
import logo from "@/assets/logo-max.png";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-muted relative overflow-hidden" aria-label="Chamada para ação">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-6 md:mb-8">
            <img 
              src={logo} 
              alt="Max Brilho - Limpa Pisos Profissional" 
              className="h-24 md:h-32 w-auto float-animation"
              loading="lazy"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Pronto para ter <span className="text-primary">Pisos Brilhando</span>?
          </h2>

          <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto">
            Entre em contato conosco pelo Instagram e faça seu pedido agora! 
            Entregamos em todo o Brasil.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a 
              href="https://www.instagram.com/maxbrilho_produto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 md:gap-3 bg-cta-gradient text-accent-foreground px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl shadow-xl hover:shadow-2xl transition-all sparkle-effect cta-pulse w-full sm:w-auto"
              whileTap={{ scale: 0.98 }}
              aria-label="Siga Max Brilho no Instagram"
            >
              <Instagram size={24} />
              Siga-nos no Instagram
            </motion.a>
          </div>

          {/* Trust Elements */}
          <div className="mt-10 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-muted-foreground text-sm md:text-base">
              <Sparkles size={18} className="text-secondary" />
              <span>Entrega Rápida</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm md:text-base">
              <Sparkles size={18} className="text-secondary" />
              <span>Pagamento Seguro</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm md:text-base">
              <Sparkles size={18} className="text-secondary" />
              <span>Satisfação Garantida</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
