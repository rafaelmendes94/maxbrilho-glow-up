import { motion } from "framer-motion";
import { Sparkles, Droplets, Shield, Leaf, Zap, ThumbsUp } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

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

const StatCounter = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { ref, displayValue } = useCountUp({ end, suffix, duration: 2500 });
  
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-secondary mb-2">
        {displayValue}
      </div>
      <div className="text-primary-foreground/80">{label}</div>
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 group text-center"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div 
                className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-gold flex items-center justify-center mb-6 mx-auto group-hover:shadow-lg group-hover:shadow-secondary/30 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <benefit.icon size={36} className="text-secondary-foreground" />
              </motion.div>
              <h3 className="text-xl font-bold text-primary-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-primary-foreground/70">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats with animated counters */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <StatCounter end={1000} suffix="+" label="Clientes Satisfeitos" />
          <StatCounter end={30} suffix="m²" label="Rendimento por Galão" />
          <StatCounter end={100} suffix="%" label="Satisfação Garantida" />
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-secondary mb-2">
              5★
            </div>
            <div className="text-primary-foreground/80">Avaliação Média</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
