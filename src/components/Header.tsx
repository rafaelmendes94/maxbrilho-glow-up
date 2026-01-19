import logo from "@/assets/logo-max.png";
import { Instagram, Phone, Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-navy/95 backdrop-blur-md shadow-xl py-2" 
          : "bg-transparent py-4"
      }`}
    >
      {/* Top Bar - Visible when not scrolled */}
      <div className={`transition-all duration-300 overflow-hidden ${isScrolled ? "h-0 opacity-0" : "h-auto opacity-100"}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-6 py-2 text-sm">
            <div className="flex items-center gap-2 text-secondary">
              <Sparkles size={14} />
              <span className="text-primary-foreground/80">Entrega para todo Brasil</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-primary-foreground/30" />
            <div className="hidden sm:flex items-center gap-2 text-secondary">
              <Sparkles size={14} />
              <span className="text-primary-foreground/80">Produtos Super Concentrados</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Max Brilho - Limpa Pisos" 
              className="h-14 w-auto transition-transform group-hover:scale-105"
            />
            <div className="hidden lg:block">
              <span className="text-primary-foreground font-bold text-lg leading-tight block">
                Max Brilho
              </span>
              <span className="text-secondary text-xs font-medium">
                Limpeza Profissional
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: "#inicio", label: "Início" },
              { href: "#produtos", label: "Produtos" },
              { href: "#beneficios", label: "Benefícios" },
              { href: "#contato", label: "Contato" },
            ].map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="relative px-4 py-2 text-primary-foreground/90 hover:text-primary-foreground font-medium transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary group-hover:w-2/3 transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://www.instagram.com/maxbrilho_produto" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-full transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-accent/30 font-semibold"
            >
              <Instagram size={18} />
              <span>Siga-nos</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary-foreground p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="py-4 border-t border-primary-foreground/20">
            <nav className="flex flex-col gap-2">
              {[
                { href: "#inicio", label: "Início" },
                { href: "#produtos", label: "Produtos" },
                { href: "#beneficios", label: "Benefícios" },
                { href: "#contato", label: "Contato" },
              ].map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-primary-foreground hover:text-secondary hover:bg-primary-foreground/10 transition-colors font-medium py-3 px-4 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="https://www.instagram.com/maxbrilho_produto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full mt-2 font-semibold"
              >
                <Instagram size={20} />
                <span>Siga-nos</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
