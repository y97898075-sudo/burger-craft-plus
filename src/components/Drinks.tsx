import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { drinks, drinkCategories, type Drink } from "@/data/drinks";
import { Plus, GlassWater } from "lucide-react";

interface DrinksProps {
  onAddToCart: (drink: Drink) => void;
}

export function Drinks({ onAddToCart }: DrinksProps) {
  const [activeCategory, setActiveCategory] = useState<string>("refrigerante");

  const filteredDrinks = drinks.filter((drink) => drink.category === activeCategory);

  return (
    <section id="drinks" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-4">
            <GlassWater className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Mate a Sede</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            BEBIDAS
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Refrigerantes gelados, sucos naturais, milkshakes cremosos e cervejas premium
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {drinkCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`gap-2 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "border-primary/30 text-foreground hover:bg-primary/10"
              }`}
            >
              <span>{category.icon}</span>
              {category.label}
            </Button>
          ))}
        </div>

        {/* Drinks Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredDrinks.map((drink) => (
            <Card
              key={drink.id}
              className="bg-card border-border/50 overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-4 flex flex-col h-full">
                {/* Image/Emoji */}
                <div className="text-5xl text-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  {drink.image}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-bold text-foreground text-center mb-1">
                    {drink.name}
                  </h3>
                  <p className="text-xs text-muted-foreground text-center mb-2">
                    {drink.description}
                  </p>
                  {drink.size && (
                    <p className="text-xs text-primary text-center font-medium">
                      {drink.size}
                    </p>
                  )}
                </div>

                {/* Price & Button */}
                <div className="mt-3 flex items-center justify-between gap-2">
                  <span className="text-lg font-bold text-primary">
                    R$ {drink.price.toFixed(2)}
                  </span>
                  <Button
                    size="sm"
                    variant="default"
                    onClick={() => onAddToCart(drink)}
                    className="gap-1"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
