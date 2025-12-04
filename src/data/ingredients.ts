export interface Ingredient {
  id: string;
  name: string;
  price: number;
  category: "bread" | "meat" | "cheese" | "vegetable" | "sauce" | "extra";
  emoji: string;
  color: string;
}

export const ingredients: Ingredient[] = [
  // Pães
  { id: "brioche", name: "Pão Brioche", price: 0, category: "bread", emoji: "🍞", color: "burger-bread" },
  { id: "australiano", name: "Pão Australiano", price: 2, category: "bread", emoji: "🥯", color: "burger-bread" },
  { id: "integral", name: "Pão Integral", price: 1.5, category: "bread", emoji: "🍞", color: "burger-bread" },

  // Carnes
  { id: "blend-150", name: "Blend 150g", price: 0, category: "meat", emoji: "🥩", color: "burger-meat" },
  { id: "blend-200", name: "Blend 200g", price: 6, category: "meat", emoji: "🥩", color: "burger-meat" },
  { id: "picanha", name: "Picanha 180g", price: 12, category: "meat", emoji: "🥩", color: "burger-meat" },
  { id: "frango", name: "Frango Grelhado", price: 4, category: "meat", emoji: "🍗", color: "burger-meat" },

  // Queijos
  { id: "cheddar", name: "Cheddar", price: 3, category: "cheese", emoji: "🧀", color: "burger-cheese" },
  { id: "mussarela", name: "Mussarela", price: 2.5, category: "cheese", emoji: "🧀", color: "burger-cheese" },
  { id: "gorgonzola", name: "Gorgonzola", price: 5, category: "cheese", emoji: "🧀", color: "burger-cheese" },
  { id: "prato", name: "Queijo Prato", price: 2.5, category: "cheese", emoji: "🧀", color: "burger-cheese" },

  // Vegetais
  { id: "alface", name: "Alface Americana", price: 0, category: "vegetable", emoji: "🥬", color: "burger-lettuce" },
  { id: "tomate", name: "Tomate", price: 0, category: "vegetable", emoji: "🍅", color: "burger-tomato" },
  { id: "cebola", name: "Cebola Roxa", price: 0, category: "vegetable", emoji: "🧅", color: "accent" },
  { id: "picles", name: "Picles", price: 1, category: "vegetable", emoji: "🥒", color: "burger-lettuce" },
  { id: "jalapeno", name: "Jalapeño", price: 2, category: "vegetable", emoji: "🌶️", color: "burger-lettuce" },

  // Molhos
  { id: "especial", name: "Molho Especial", price: 0, category: "sauce", emoji: "🥫", color: "accent" },
  { id: "barbecue", name: "Barbecue", price: 1, category: "sauce", emoji: "🥫", color: "burger-meat" },
  { id: "mostarda", name: "Mostarda e Mel", price: 1.5, category: "sauce", emoji: "🥫", color: "primary" },
  { id: "maionese", name: "Maionese Artesanal", price: 1, category: "sauce", emoji: "🥫", color: "foreground" },

  // Extras
  { id: "bacon", name: "Bacon Crocante", price: 5, category: "extra", emoji: "🥓", color: "burger-bacon" },
  { id: "ovo", name: "Ovo Frito", price: 3, category: "extra", emoji: "🍳", color: "primary" },
  { id: "onion-rings", name: "Onion Rings", price: 4, category: "extra", emoji: "🧅", color: "burger-bread" },
  { id: "cogumelos", name: "Cogumelos", price: 4, category: "extra", emoji: "🍄", color: "muted-foreground" },
];

export const categoryLabels: Record<Ingredient["category"], string> = {
  bread: "Pão",
  meat: "Carne",
  cheese: "Queijo",
  vegetable: "Vegetais",
  sauce: "Molho",
  extra: "Extras",
};

export const categoryOrder: Ingredient["category"][] = [
  "bread",
  "meat",
  "cheese",
  "vegetable",
  "sauce",
  "extra",
];
