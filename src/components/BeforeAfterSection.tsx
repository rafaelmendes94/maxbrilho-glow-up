import { motion } from "framer-motion";
import { Sparkles, Check } from "lucide-react";
import antesDepoisImg from "@/assets/antes-depois-novo.jpg";
import arrowCurved from "@/assets/arrow-curved.png";

const BeforeAfterSection = () => {
  return (
    <section id="antes-depois" className="py-20 bg-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">
            Veja o <span className="text-gradient-gold">Antes e Depois</span>
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Resultados reais com Max Brilho. Seu piso vai brilhar como nunca!
          </p>
        </motion.div>

        {/* Polaroid Cards Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 max-w-4xl mx-auto">
          {/* Before Card (Polaroid Style) */}
          <motion.div 
            className="relative bg-white rounded-lg p-3 shadow-2xl transform md:-rotate-6 hover:rotate-0 transition-transform duration-500"
            initial={{ opacity: 0, x: -100, rotate: -15 }}
            whileInView={{ opacity: 1, x: 0, rotate: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <div className="w-64 h-72 sm:w-72 sm:h-80 overflow-hidden rounded-sm">
              <img 
                src={antesDepoisImg} 
                alt="Piso antes da limpeza"
                className="w-full h-full object-cover object-left"
                loading="lazy"
              />
            </div>
            <p className="text-center py-3 font-bold text-xl text-gray-800 italic">
              Antes
            </p>
          </motion.div>

          {/* Arrow between cards */}
          <motion.div 
            className="hidden md:flex items-center justify-center mx-4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <img 
              src={arrowCurved} 
              alt="Seta"
              className="w-16 h-auto"
            />
          </motion.div>

          {/* Mobile Arrow */}
          <motion.div 
            className="md:hidden flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <img 
              src={arrowCurved} 
              alt="Seta"
              className="w-12 h-auto rotate-90"
            />
          </motion.div>

          {/* After Card (Polaroid Style) */}
          <motion.div 
            className="relative bg-white rounded-lg p-3 shadow-2xl transform md:rotate-6 hover:rotate-0 transition-transform duration-500"
            initial={{ opacity: 0, x: 100, rotate: 15 }}
            whileInView={{ opacity: 1, x: 0, rotate: 6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
          >
            {/* Checkmark badge */}
            <motion.div 
              className="absolute -top-6 -right-6 z-20"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            >
              <div className="relative">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg border-4 border-dashed border-white/50">
                  <Check size={32} className="text-white" strokeWidth={3} />
                </div>
                {/* Sparkle decorations */}
                <div className="absolute -top-2 -right-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2 L14 8 L12 6 L10 8 Z" fill="#FFD700" />
                    <path d="M6 12 L12 14 L10 12 L12 10 Z" fill="#FFD700" />
                    <path d="M18 12 L12 14 L14 12 L12 10 Z" fill="#FFD700" />
                  </svg>
                </div>
              </div>
            </motion.div>

            <div className="w-64 h-72 sm:w-72 sm:h-80 overflow-hidden rounded-sm">
              <img 
                src={antesDepoisImg} 
                alt="Piso depois da limpeza"
                className="w-full h-full object-cover object-right"
                loading="lazy"
              />
            </div>
            <p className="text-center py-3 font-bold text-xl text-gray-800 italic">
              Depois
            </p>
          </motion.div>
        </div>

        {/* Benefits below image */}
        <motion.div 
          className="mt-12 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-primary-foreground">
            <Sparkles size={20} className="text-secondary" />
            <span>Brilho Instantâneo</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground">
            <Sparkles size={20} className="text-secondary" />
            <span>Remove Manchas Difíceis</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground">
            <Sparkles size={20} className="text-secondary" />
            <span>Resultado Profissional</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
