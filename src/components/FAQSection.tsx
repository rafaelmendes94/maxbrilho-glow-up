import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

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

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm flex items-center justify-center gap-2">
            <HelpCircle size={18} />
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos produtos e entregas.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border border-border shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
