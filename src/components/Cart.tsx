import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Trash2, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ingredients } from "@/data/ingredients";
import { combos } from "@/data/combos";

export interface CartItem {
  id: string;
  type: "burger" | "combo";
  name: string;
  price: number;
  details?: string;
}

interface CartProps {
  items: CartItem[];
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  phoneNumber: string;
}

export function Cart({ items, onRemoveItem, onClearCart, phoneNumber }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  const sendToWhatsApp = () => {
    let message = "🍔 *PEDIDO BURGUER PLUS*\n\n";
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      if (item.details) {
        message += `   ${item.details}\n`;
      }
      message += `   R$ ${item.price.toFixed(2)}\n\n`;
    });

    message += `━━━━━━━━━━━━━━━━━━\n`;
    message += `*TOTAL: R$ ${total.toFixed(2)}*`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="fixed top-4 right-4 z-50 border-primary">
          <ShoppingCart className="w-5 h-5 text-primary" />
          {items.length > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-5 h-5 flex items-center justify-center p-0 text-xs">
              {items.length}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-card border-border w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl text-primary">Seu Pedido</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full pt-6">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground">
              <ShoppingCart className="w-16 h-16 mb-4 opacity-50" />
              <p>Seu carrinho está vazio</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between p-4 bg-muted rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-foreground">{item.name}</div>
                      {item.details && (
                        <div className="text-sm text-muted-foreground mt-1">{item.details}</div>
                      )}
                      <div className="text-primary font-bold mt-1">
                        R$ {item.price.toFixed(2)}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive hover:text-destructive"
                      onClick={() => onRemoveItem(index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 mt-4 space-y-4">
                <div className="flex justify-between font-display text-2xl">
                  <span className="text-foreground">Total</span>
                  <span className="text-primary">R$ {total.toFixed(2)}</span>
                </div>

                <Button variant="fire" size="xl" className="w-full" onClick={sendToWhatsApp}>
                  <MessageCircle className="w-5 h-5" />
                  Enviar Pedido via WhatsApp
                </Button>

                <Button 
                  variant="ghost" 
                  className="w-full text-muted-foreground"
                  onClick={onClearCart}
                >
                  Limpar Carrinho
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
