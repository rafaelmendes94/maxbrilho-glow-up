import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const floorTypes = [
  "Porcelanato fosco",
  "Porcelanato acetinado",
  "Porcelanato rústico",
  "Porcelanato antiderrapante",
  "Cerâmica lisa",
  "Cerâmica antiderrapante",
  "Cerâmica acetinada",
  "Cerâmica fosca",
  "Piso granilite",
  "Piso Ardósia",
  "Granito",
  "Mármore",
  "Cimento queimado",
  "Pedras em geral",
];

const FloorTypesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Compatibilidade
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Pisos <span className="text-primary">Indicados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            O Max Brilho é compatível com diversos tipos de pisos, garantindo limpeza e brilho profissional.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 max-w-5xl mx-auto">
          {floorTypes.map((floor, index) => (
            <motion.div
              key={floor}
              className="flex items-center gap-2 bg-card p-3 md:p-4 rounded-xl shadow-sm border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.02, backgroundColor: "hsl(var(--muted))" }}
            >
              <Check size={16} className="text-secondary flex-shrink-0" />
              <span className="text-sm md:text-base text-foreground font-medium">
                {floor}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="#produtos"
            className="inline-flex items-center gap-2 bg-cta-gradient text-accent-foreground px-6 py-3 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Quero restaurar meu piso
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FloorTypesSection;
