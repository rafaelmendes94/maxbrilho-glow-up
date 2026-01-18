import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5500000000000"; // Substitua pelo número real
  const message = "Olá! Gostaria de saber mais sobre os produtos Max Brilho.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contato via WhatsApp"
    >
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
      
      {/* Button */}
      <div className="relative flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <MessageCircle size={24} className="fill-white" />
        <span className="font-semibold hidden sm:block">
          Fale Conosco
        </span>
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-foreground text-background text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Tire suas dúvidas pelo WhatsApp!
        <div className="absolute top-full right-4 border-4 border-transparent border-t-foreground" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
