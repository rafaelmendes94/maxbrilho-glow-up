import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-max.png";

const Footer = () => {
  return (
    <footer id="contato" className="bg-navy py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img 
              src={logo} 
              alt="Max Brilho" 
              className="h-20 w-auto mb-4"
            />
            <p className="text-primary-foreground/70 leading-relaxed">
              Produtos de limpeza de alta qualidade para deixar sua casa sempre brilhando. 
              Super concentrado e com resultados profissionais.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary-foreground font-bold text-lg mb-4">
              Links Rápidos
            </h3>
            <nav className="space-y-3">
              <a 
                href="#inicio" 
                className="block text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                Início
              </a>
              <a 
                href="#produtos" 
                className="block text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                Produtos
              </a>
              <a 
                href="#beneficios" 
                className="block text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                Benefícios
              </a>
              <a 
                href="https://www.instagram.com/maxbrilho_produto"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                Comprar
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-primary-foreground font-bold text-lg mb-4">
              Contato
            </h3>
            <div className="space-y-4">
              <a 
                href="https://www.instagram.com/maxbrilho_produto"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                <Instagram size={20} />
                @maxbrilho_produto
              </a>
            </div>

            {/* Social */}
            <div className="mt-6">
              <a 
                href="https://www.instagram.com/maxbrilho_produto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent hover:bg-red-dark transition-colors"
              >
                <Instagram size={24} className="text-accent-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © 2025 Max Brilho. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Limpeza e Brilho Poderosos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
