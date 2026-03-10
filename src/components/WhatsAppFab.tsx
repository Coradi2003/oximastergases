import { MessageCircle } from "lucide-react";

const WhatsAppFab = () => {
  return (
    <a
      href="https://wa.me/5543999251330?text=Olá! Gostaria de fazer um orçamento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform animate-pulse-glow"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppFab;
