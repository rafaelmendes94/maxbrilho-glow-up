import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Como usar o Max Brilho?",
    answer:
      "Dilua 100ml do produto em 5 litros de água. Aplique no piso com um pano ou mop, esfregue levemente e deixe secar. Não precisa enxaguar!",
  },
  {
    question: "Qual o rendimento do produto?",
    answer:
      "O galão de 5L rende aproximadamente 30m² quando usado de forma concentrada, ou até 150m² quando diluído conforme recomendação.",
  },
  {
    question: "Posso usar em todos os tipos de piso?",
    answer:
      "Sim! O Max Brilho é seguro para porcelanato, cerâmica, vinil, laminado, granito, mármore e azulejos. Evite uso em madeira natural sem acabamento.",
  },
  {
    question: "O produto é seguro para pets e crianças?",
    answer:
      "Sim, após a secagem o produto é completamente seguro. Recomendamos manter fora do alcance de crianças durante o armazenamento.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "Aceitamos cartão de crédito (até 12x), PIX com desconto, boleto bancário e transferência. O pagamento é processado de forma segura.",
  },
  {
    question: "Qual o prazo de entrega?",
    answer:
      "O prazo varia de acordo com a região. Geralmente de 3 a 10 dias úteis. Envios para todo o Brasil com rastreamento.",
  },
];

// JSON-LD Schema for FAQ
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-20 bg-background">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-secondary font-semibold uppercase tracking-wider text-xs md:text-sm flex items-center justify-center gap-2">
            <HelpCircle size={16} />
            Dúvidas Frequentes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mt-2 mb-3 md:mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Tire suas dúvidas sobre nossos produtos e entregas.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-4 md:px-6 border border-border shadow-sm"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:text-primary py-4 md:py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 md:pb-5 text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
