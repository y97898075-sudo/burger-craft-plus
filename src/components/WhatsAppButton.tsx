import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export function WhatsAppButton({ phoneNumber, message = "Olá! Gostaria de fazer um pedido." }: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      variant="whatsapp"
      size="xl"
      className="fixed bottom-6 right-6 z-50 rounded-full shadow-xl hover:scale-110 transition-transform"
      onClick={handleClick}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline">Fazer Pedido</span>
    </Button>
  );
}
