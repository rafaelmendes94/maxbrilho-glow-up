import { Instagram, MessageCircle, Sparkles } from "lucide-react";
import logo from "@/assets/logo-max.png";

const CTASection = () => {
  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={logo} 
              alt="Max Brilho" 
              className="h-32 w-auto float-animation"
            />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Pronto para ter <span className="text-primary">Pisos Brilhando</span>?
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Entre em contato conosco pelo Instagram e faça seu pedido agora! 
            Entregamos em todo o Brasil.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://www.instagram.com/maxbrilho_produto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-cta-gradient text-accent-foreground px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all sparkle-effect"
            >
              <Instagram size={28} />
              Comprar pelo Instagram
            </a>
          </div>

          {/* Trust Elements */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sparkles size={20} className="text-secondary" />
              <span>Entrega Rápida</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sparkles size={20} className="text-secondary" />
              <span>Pagamento Seguro</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sparkles size={20} className="text-secondary" />
              <span>Satisfação Garantida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
