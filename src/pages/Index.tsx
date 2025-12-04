import { useState } from "react";
import { Hero } from "@/components/Hero";
import { BurgerBuilder } from "@/components/BurgerBuilder";
import { Combos } from "@/components/Combos";
import { Drinks } from "@/components/Drinks";
import { Promotions } from "@/components/Promotions";
import { Gallery } from "@/components/Gallery";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Cart, type CartItem } from "@/components/Cart";
import { Footer } from "@/components/Footer";
import { ingredients } from "@/data/ingredients";
import { combos } from "@/data/combos";
import { type Drink } from "@/data/drinks";
import { toast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "5511999999999"; // Replace with actual number

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddBurgerToCart = (selectedIngredients: { [key: string]: number }, total: number) => {
    const ingredientNames = Object.entries(selectedIngredients)
      .map(([id, count]) => {
        const ingredient = ingredients.find((i) => i.id === id);
        return ingredient ? `${ingredient.name} x${count}` : null;
      })
      .filter(Boolean)
      .join(", ");

    const newItem: CartItem = {
      id: `burger-${Date.now()}`,
      type: "burger",
      name: "Burger Personalizado",
      price: total,
      details: ingredientNames,
    };

    setCartItems((prev) => [...prev, newItem]);
    toast({
      title: "Adicionado ao carrinho! 🍔",
      description: "Seu burger personalizado foi adicionado",
    });
  };

  const handleAddComboToCart = (comboId: string, price: number) => {
    const combo = combos.find((c) => c.id === comboId);
    if (!combo) return;

    const newItem: CartItem = {
      id: `combo-${Date.now()}`,
      type: "combo",
      name: combo.name,
      price: price,
      details: combo.items.join(", "),
    };

    setCartItems((prev) => [...prev, newItem]);
    toast({
      title: "Adicionado ao carrinho! 🎉",
      description: `${combo.name} foi adicionado`,
    });
  };

  const handleAddDrinkToCart = (drink: Drink) => {
    const newItem: CartItem = {
      id: `drink-${Date.now()}`,
      type: "drink",
      name: drink.name,
      price: drink.price,
      details: drink.size || "",
    };

    setCartItems((prev) => [...prev, newItem]);
    toast({
      title: "Adicionado ao carrinho! 🥤",
      description: `${drink.name} foi adicionado`,
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
    toast({
      title: "Carrinho limpo",
      description: "Todos os itens foram removidos",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Cart
        items={cartItems}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        phoneNumber={WHATSAPP_NUMBER}
      />
      <Hero />
      <BurgerBuilder onAddToCart={handleAddBurgerToCart} />
      <Combos onAddToCart={handleAddComboToCart} />
      <Drinks onAddToCart={handleAddDrinkToCart} />
      <Promotions />
      <Gallery />
      <Footer />
      <WhatsAppButton phoneNumber={WHATSAPP_NUMBER} />
    </div>
  );
};

export default Index;
