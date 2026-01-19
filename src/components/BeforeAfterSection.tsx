import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import antesDepoisImg from "@/assets/antes-depois-gerado.jpg";

const BeforeAfterSection = () => {
  return (
    <section id="antes-depois" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Transformação Real
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Veja o <span className="text-primary">Antes e Depois</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Resultados reais com Max Brilho. Seu piso vai brilhar como nunca!
          </p>
        </motion.div>

        {/* Before/After Image */}
        <motion.div 
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <img 
            src={antesDepoisImg} 
            alt="Antes e Depois - Max Brilho"
            className="w-full h-auto"
            loading="lazy"
          />
          
          {/* Labels */}
          <div className="absolute inset-0 flex">
            <motion.div 
              className="w-1/2 flex items-end justify-center pb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <span className="bg-destructive/90 text-destructive-foreground px-4 py-2 rounded-full font-bold text-sm md:text-base shadow-lg">
                ANTES
              </span>
            </motion.div>
            <motion.div 
              className="w-1/2 flex items-end justify-center pb-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              <span className="bg-green-500/90 text-white px-4 py-2 rounded-full font-bold text-sm md:text-base shadow-lg flex items-center gap-2">
                <Sparkles size={16} />
                DEPOIS
              </span>
            </motion.div>
          </div>

          {/* Arrow indicator */}
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
          >
            <div className="bg-secondary text-secondary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-xl">
              <ArrowRight size={28} />
            </div>
          </motion.div>
        </motion.div>

        {/* Benefits below image */}
        <motion.div 
          className="mt-12 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-foreground">
            <Sparkles size={20} className="text-secondary" />
            <span>Brilho Instantâneo</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <Sparkles size={20} className="text-secondary" />
            <span>Remove Manchas Difíceis</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <Sparkles size={20} className="text-secondary" />
            <span>Resultado Profissional</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
