import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { combos } from "@/data/combos";
import { ShoppingCart, Star } from "lucide-react";

interface CombosProps {
  onAddToCart: (comboId: string, price: number) => void;
}

export function Combos({ onAddToCart }: CombosProps) {
  return (
    <section id="combos" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl md:text-6xl text-gradient-fire mb-4">
            COMBOS ESPECIAIS
          </h2>
          <p className="text-lg text-muted-foreground">
            Ofertas imperdíveis para você se deliciar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {combos.map((combo, index) => (
            <Card
              key={combo.id}
              className={`group p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow animate-slide-up ${
                combo.featured ? "ring-2 ring-primary/50" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge */}
              {combo.badge && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-fire text-primary-foreground">
                  {combo.badge}
                </Badge>
              )}

              {/* Image/Emoji */}
              <div className="text-7xl text-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {combo.image}
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl text-foreground mb-2">{combo.name}</h3>
              
              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4">{combo.description}</p>

              {/* Items */}
              <div className="space-y-1 mb-4">
                {combo.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="w-3 h-3 text-primary" />
                    {item}
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-3xl text-primary">
                  R$ {combo.price.toFixed(2)}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  R$ {combo.originalPrice.toFixed(2)}
                </span>
                <Badge variant="secondary" className="bg-primary/20 text-primary">
                  -{Math.round((1 - combo.price / combo.originalPrice) * 100)}%
                </Badge>
              </div>

              {/* Button */}
              <Button 
                variant="fire" 
                className="w-full"
                onClick={() => onAddToCart(combo.id, combo.price)}
              >
                <ShoppingCart className="w-4 h-4" />
                Adicionar
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
