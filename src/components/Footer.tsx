import { Instagram } from "lucide-react";
import logo from "@/assets/logo-max.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-navy py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <img 
              src={logo} 
              alt="Max Brilho - Limpa Pisos Profissional" 
              className="h-16 md:h-20 w-auto mb-4 mx-auto sm:mx-0"
              loading="lazy"
            />
            <p className="text-primary-foreground/70 leading-relaxed text-sm md:text-base">
              Produtos de limpeza de alta qualidade para deixar sua casa sempre brilhando. 
              Super concentrado e com resultados profissionais.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-primary-foreground font-bold text-base md:text-lg mb-4">
              Links Rápidos
            </h3>
            <nav className="space-y-2 md:space-y-3" aria-label="Links de navegação do rodapé">
              <a 
                href="#inicio" 
                className="block text-primary-foreground/70 hover:text-secondary transition-colors text-sm md:text-base"
              >
                Início
              </a>
              <a 
                href="#produtos" 
                className="block text-primary-foreground/70 hover:text-secondary transition-colors text-sm md:text-base"
              >
                Produtos
              </a>
              <a 
                href="#beneficios" 
                className="block text-primary-foreground/70 hover:text-secondary transition-colors text-sm md:text-base"
              >
                Benefícios
              </a>
              <a 
                href="#faq" 
                className="block text-primary-foreground/70 hover:text-secondary transition-colors text-sm md:text-base"
              >
                FAQ
              </a>
              <a 
                href="https://www.instagram.com/maxbrilho_produto"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary-foreground/70 hover:text-secondary transition-colors text-sm md:text-base"
              >
                Siga-nos
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h3 className="text-primary-foreground font-bold text-base md:text-lg mb-4">
              Contato
            </h3>
            <div className="space-y-4">
              <a 
                href="https://www.instagram.com/maxbrilho_produto"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors justify-center sm:justify-start text-sm md:text-base"
                aria-label="Siga Max Brilho no Instagram"
              >
                <Instagram size={20} />
                @maxbrilho_produto
              </a>
            </div>

            {/* Social */}
            <div className="mt-6 flex justify-center sm:justify-start">
              <a 
                href="https://www.instagram.com/maxbrilho_produto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-accent hover:bg-red-dark transition-colors"
                aria-label="Visite nosso Instagram"
              >
                <Instagram size={22} className="text-accent-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-primary-foreground/60 text-xs md:text-sm text-center md:text-left">
              © {currentYear} Max Brilho. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/60 text-xs md:text-sm">
              Limpeza e Brilho Poderosos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
