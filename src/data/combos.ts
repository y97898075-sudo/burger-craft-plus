export interface Combo {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  items: string[];
  image: string;
  badge?: string;
  featured?: boolean;
}

export const combos: Combo[] = [
  {
    id: "combo-classico",
    name: "Combo Clássico",
    description: "Smash burger duplo + batata média + refri 350ml",
    price: 34.9,
    originalPrice: 42.9,
    items: ["Smash Burger Duplo", "Batata Média", "Refrigerante 350ml"],
    image: "🍔",
    badge: "Mais Vendido",
    featured: true,
  },
  {
    id: "combo-picanha",
    name: "Combo Picanha",
    description: "Burger de picanha + batata grande + milk shake",
    price: 49.9,
    originalPrice: 62.9,
    items: ["Burger de Picanha", "Batata Grande", "Milk Shake"],
    image: "🥩",
    badge: "Premium",
  },
  {
    id: "combo-bacon",
    name: "Combo Bacon Lover",
    description: "Burger com bacon triplo + batata bacon + refri 500ml",
    price: 44.9,
    originalPrice: 54.9,
    items: ["Burger Bacon Triplo", "Batata com Bacon", "Refrigerante 500ml"],
    image: "🥓",
    featured: true,
  },
  {
    id: "combo-fitness",
    name: "Combo Fitness",
    description: "Burger de frango grelhado + salada + água de coco",
    price: 32.9,
    originalPrice: 39.9,
    items: ["Burger de Frango", "Salada Caesar", "Água de Coco"],
    image: "🥗",
    badge: "Leve",
  },
  {
    id: "combo-kids",
    name: "Combo Kids",
    description: "Mini burger + mini batata + suco natural + brinquedo",
    price: 24.9,
    originalPrice: 29.9,
    items: ["Mini Burger", "Mini Batata", "Suco Natural", "Brinquedo"],
    image: "🧸",
  },
  {
    id: "combo-dupla",
    name: "Combo Dupla",
    description: "2 smash burgers + batata grande + 2 refris 350ml",
    price: 59.9,
    originalPrice: 75.9,
    items: ["2x Smash Burger", "Batata Grande", "2x Refrigerante 350ml"],
    image: "👫",
    badge: "Para 2",
    featured: true,
  },
];

export interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  code?: string;
  bgColor: string;
}

export const promotions: Promotion[] = [
  {
    id: "promo-1",
    title: "Terça do Dobro",
    description: "Compre 1 burger e ganhe outro igual",
    discount: "2 por 1",
    validUntil: "Toda terça-feira",
    bgColor: "bg-gradient-fire",
  },
  {
    id: "promo-2",
    title: "Happy Hour",
    description: "Combos com 20% de desconto",
    discount: "20% OFF",
    validUntil: "Seg-Sex 17h às 19h",
    code: "HAPPY20",
    bgColor: "bg-gradient-gold",
  },
  {
    id: "promo-3",
    title: "Primeira Compra",
    description: "Desconto especial para novos clientes",
    discount: "15% OFF",
    validUntil: "Sempre válido",
    code: "BEMVINDO15",
    bgColor: "bg-primary",
  },
];
