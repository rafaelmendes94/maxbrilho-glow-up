import logo from "@/assets/logo-max.png";
import { Instagram, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Max Brilho - Limpa Pisos" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#inicio" 
              className="text-primary-foreground hover:text-secondary transition-colors font-medium"
            >
              Início
            </a>
            <a 
              href="#produtos" 
              className="text-primary-foreground hover:text-secondary transition-colors font-medium"
            >
              Produtos
            </a>
            <a 
              href="#beneficios" 
              className="text-primary-foreground hover:text-secondary transition-colors font-medium"
            >
              Benefícios
            </a>
            <a 
              href="#contato" 
              className="text-primary-foreground hover:text-secondary transition-colors font-medium"
            >
              Contato
            </a>
          </nav>

          {/* Social & Contact */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://www.instagram.com/maxbrilho_produto" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-accent hover:bg-red-dark text-accent-foreground px-4 py-2 rounded-full transition-all transform hover:scale-105"
            >
              <Instagram size={20} />
              <span className="font-medium">Instagram</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary-foreground p-2"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-navy-light">
            <nav className="flex flex-col gap-4">
              <a 
                href="#inicio" 
                className="text-primary-foreground hover:text-secondary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a 
                href="#produtos" 
                className="text-primary-foreground hover:text-secondary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </a>
              <a 
                href="#beneficios" 
                className="text-primary-foreground hover:text-secondary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefícios
              </a>
              <a 
                href="#contato" 
                className="text-primary-foreground hover:text-secondary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <a 
                href="https://www.instagram.com/maxbrilho_produto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full w-fit"
              >
                <Instagram size={20} />
                <span className="font-medium">Instagram</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
