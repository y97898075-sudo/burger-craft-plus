import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ingredients, categoryLabels, categoryOrder, type Ingredient } from "@/data/ingredients";
import { Plus, Minus, ShoppingCart } from "lucide-react";

interface SelectedIngredients {
  [key: string]: number;
}

interface BurgerBuilderProps {
  onAddToCart: (ingredients: SelectedIngredients, total: number) => void;
}

export function BurgerBuilder({ onAddToCart }: BurgerBuilderProps) {
  const [selected, setSelected] = useState<SelectedIngredients>({
    brioche: 1,
    "blend-150": 1,
    cheddar: 1,
    alface: 1,
    tomate: 1,
    especial: 1,
  });

  const basePrice = 18.9;

  const addIngredient = (id: string) => {
    setSelected((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeIngredient = (id: string) => {
    setSelected((prev) => {
      const newCount = (prev[id] || 0) - 1;
      if (newCount <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newCount };
    });
  };

  const calculateTotal = () => {
    let total = basePrice;
    Object.entries(selected).forEach(([id, count]) => {
      const ingredient = ingredients.find((i) => i.id === id);
      if (ingredient) {
        total += ingredient.price * count;
      }
    });
    return total;
  };

  const getIngredientsByCategory = (category: Ingredient["category"]) => {
    return ingredients.filter((i) => i.category === category);
  };

  const total = calculateTotal();

  return (
    <section id="builder" className="py-20 bg-muted/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl md:text-6xl text-gradient-fire mb-4">
            MONTE SEU BURGER
          </h2>
          <p className="text-lg text-muted-foreground">
            Escolha os ingredientes e crie o hambúrguer perfeito
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Ingredients Selection */}
          <div className="lg:col-span-2 space-y-6">
            {categoryOrder.map((category) => (
              <Card key={category} className="p-6 bg-card border-border">
                <h3 className="font-display text-2xl text-primary mb-4">
                  {categoryLabels[category]}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {getIngredientsByCategory(category).map((ingredient) => (
                    <div
                      key={ingredient.id}
                      className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                        selected[ingredient.id]
                          ? "bg-primary/10 border-primary"
                          : "bg-background border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{ingredient.emoji}</span>
                        <div>
                          <div className="font-medium text-foreground">{ingredient.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {ingredient.price === 0 ? "Incluso" : `+R$ ${ingredient.price.toFixed(2)}`}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => removeIngredient(ingredient.id)}
                          disabled={!selected[ingredient.id]}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-6 text-center font-bold text-foreground">
                          {selected[ingredient.id] || 0}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => addIngredient(ingredient.id)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-4 h-fit">
            <Card className="p-6 bg-card border-primary shadow-glow">
              <h3 className="font-display text-2xl text-primary mb-4">Seu Burger</h3>
              
              {/* Visual Burger */}
              <div className="flex flex-col items-center gap-1 py-6 mb-4">
                <div className="w-32 h-8 bg-burger-bread rounded-t-full shadow-md">🍞</div>
                {Object.entries(selected).map(([id, count]) => {
                  const ingredient = ingredients.find((i) => i.id === id);
                  if (!ingredient || ingredient.category === "bread" || ingredient.category === "sauce") return null;
                  return Array(count).fill(null).map((_, idx) => (
                    <div
                      key={`${id}-${idx}`}
                      className="w-28 h-4 rounded-sm shadow-sm flex items-center justify-center text-xs animate-bounce-in"
                      style={{ 
                        backgroundColor: `hsl(var(--${ingredient.color}))`,
                        animationDelay: `${idx * 0.1}s`
                      }}
                    />
                  ));
                })}
                <div className="w-32 h-6 bg-burger-bread rounded-b-lg shadow-md" />
              </div>

              {/* Selected Items */}
              <div className="space-y-2 mb-6 max-h-48 overflow-y-auto">
                {Object.entries(selected).map(([id, count]) => {
                  const ingredient = ingredients.find((i) => i.id === id);
                  if (!ingredient) return null;
                  return (
                    <div key={id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {ingredient.emoji} {ingredient.name} x{count}
                      </span>
                      <span className="text-foreground">
                        {(ingredient.price * count) === 0 ? "Incluso" : `R$ ${(ingredient.price * count).toFixed(2)}`}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Price */}
              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Base</span>
                  <span>R$ {basePrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-display text-3xl text-primary">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
              </div>

              {/* Add to Cart */}
              <Button 
                variant="fire" 
                size="xl" 
                className="w-full"
                onClick={() => onAddToCart(selected, total)}
              >
                <ShoppingCart className="w-5 h-5" />
                Adicionar ao Pedido
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
