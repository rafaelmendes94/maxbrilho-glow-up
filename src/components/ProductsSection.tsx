import produto1 from "@/assets/produto-1.jpeg";
import produto2 from "@/assets/produto-2.jpeg";
import { ShoppingCart, Star, Check } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Max Brilho 5L",
    description: "Limpa Pisos Super Concentrado",
    price: "R$ 69,90",
    originalPrice: "R$ 99,90",
    image: produto1,
    features: [
      "Rende até 30m²",
      "Super concentrado",
      "Pisos, azulejos e louças",
      "Brilho intenso",
    ],
    bestseller: true,
    buyLink: "https://max-brilho.pay.yampi.com.br/r/K46SM0QP0P",
  },
  {
    id: 2,
    name: "Kit Max Brilho 2x5L",
    description: "Combo Econômico - 2 Galões",
    price: "R$ 119,90",
    originalPrice: "R$ 169,90",
    image: produto2,
    features: [
      "Rende até 60m²",
      "Super concentrado",
      "Economia garantida",
      "Frete grátis*",
    ],
    bestseller: false,
    buyLink: "https://max-brilho.pay.yampi.com.br/r/MH629BPBR2",
  },
];

const cardVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index === 0 ? -60 : 60,
    y: 20,
  }),
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.2,
      ease: "easeOut" as const,
    },
  }),
};

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Nossos Produtos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Escolha o <span className="text-primary">Melhor</span> para Você
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Produtos de alta qualidade para deixar sua casa brilhando. 
            Super concentrados e com resultados profissionais.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Bestseller Badge */}
              {product.bestseller && (
                <motion.div 
                  className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1"
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                >
                  <Star size={14} fill="currentColor" />
                  Mais Vendido
                </motion.div>
              )}

              {/* Discount Badge */}
              <motion.div 
                className="absolute top-4 right-4 z-10 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-bold"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                -30%
              </motion.div>

              {/* Product Image */}
              <div className="relative bg-gradient-to-b from-muted to-card p-4 sm:p-8">
                <motion.img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 sm:h-64 object-contain"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Imagem ilustrativa tag */}
                <span className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 text-[10px] sm:text-xs text-muted-foreground italic">
                  *Imagem meramente ilustrativa
                </span>
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center gap-2 text-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Check size={16} className="text-secondary flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="flex items-baseline gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl font-extrabold text-primary">
                    {product.price}
                  </span>
                  <span className="text-base sm:text-lg text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                </div>

                {/* CTA Button */}
                <motion.a 
                  href={product.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-cta-gradient text-accent-foreground px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingCart size={18} className="sm:w-5 sm:h-5" />
                  Comprar Agora
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-muted-foreground text-sm">
            * Frete grátis para compras acima de R$ 150,00. Consulte condições.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
