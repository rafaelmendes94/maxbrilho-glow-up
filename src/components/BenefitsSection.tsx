import { Sparkles, Droplets, Shield, Leaf, Zap, ThumbsUp } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Brilho Intenso",
    description: "Deixa suas superfícies com brilho profissional e duradouro.",
  },
  {
    icon: Droplets,
    title: "Super Concentrado",
    description: "Pouca quantidade rende muito. Economia garantida!",
  },
  {
    icon: Shield,
    title: "Proteção Total",
    description: "Protege contra manchas e sujeiras futuras.",
  },
  {
    icon: Leaf,
    title: "Fórmula Suave",
    description: "Não agride suas mãos nem o meio ambiente.",
  },
  {
    icon: Zap,
    title: "Ação Rápida",
    description: "Remove sujeiras difíceis em segundos.",
  },
  {
    icon: ThumbsUp,
    title: "Fácil de Usar",
    description: "Basta diluir e aplicar. Simples assim!",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Por que escolher
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">
            Benefícios <span className="text-gradient-gold">Max Brilho</span>
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Descubra porque milhares de clientes confiam em nossos produtos 
            para manter suas casas limpas e brilhando.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 group"
              style={{ 
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon size={28} className="text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-primary-foreground/70">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-secondary mb-2">
              1000+
            </div>
            <div className="text-primary-foreground/80">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-secondary mb-2">
              30m²
            </div>
            <div className="text-primary-foreground/80">Rendimento por Galão</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-secondary mb-2">
              100%
            </div>
            <div className="text-primary-foreground/80">Satisfação Garantida</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-secondary mb-2">
              5★
            </div>
            <div className="text-primary-foreground/80">Avaliação Média</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
