import { motion } from "framer-motion";
import { DollarSign, Leaf, FlaskConical, ArrowRight } from "lucide-react";
import produto1 from "@/assets/produto-1.jpeg";

const benefits = [
  {
    icon: DollarSign,
    title: "Economia garantida no frete",
    description: "Com menos peso e volume o envio fica mais barato e mais rápido.",
  },
  {
    icon: Leaf,
    title: "Mais sustentável",
    description: "Menos plástico, menos espaço, menor impacto ambiental.",
  },
  {
    icon: FlaskConical,
    title: "Fórmula superconcentrada",
    description: "Agora você recebe 1 litro superconcentrado e dilui na hora, mantendo a mesma potência e eficiência de limpeza.",
  },
];

const ConcentratedFormulaSection = () => {
  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Product Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-gradient-to-br from-card to-muted rounded-2xl p-8 shadow-xl">
              <img
                src={produto1}
                alt="Max Brilho 1L - Fórmula Concentrada"
                className="w-full max-w-xs mx-auto object-contain"
                loading="lazy"
              />
              <span className="absolute bottom-2 right-4 text-xs text-muted-foreground italic">
                *Imagem meramente ilustrativa
              </span>
            </div>
            {/* Badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              Super Concentrado
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              Tecnologia Avançada
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Tecnologia concentrada que{" "}
              <span className="text-primary">rende muito mais!</span>
            </h2>

            <div className="bg-card rounded-xl p-4 md:p-6 mb-6 border-l-4 border-secondary">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                Por que agora enviamos em embalagem de 1 litro?
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Pensando em você e no meio ambiente, reformulamos nossa embalagem para oferecer mais praticidade e economia.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm md:text-base">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#produtos"
              className="mt-8 inline-flex items-center gap-2 bg-cta-gradient text-accent-foreground px-6 py-3 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Quero restaurar meu piso
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConcentratedFormulaSection;
