export interface Drink {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "refrigerante" | "suco" | "agua" | "milkshake" | "cerveja";
  image: string;
  size?: string;
}

export const drinks: Drink[] = [
  // Refrigerantes
  {
    id: "coca-cola",
    name: "Coca-Cola",
    description: "Refrigerante gelado 350ml",
    price: 6.00,
    category: "refrigerante",
    image: "🥤",
    size: "350ml"
  },
  {
    id: "coca-zero",
    name: "Coca-Cola Zero",
    description: "Refrigerante zero açúcar 350ml",
    price: 6.00,
    category: "refrigerante",
    image: "🥤",
    size: "350ml"
  },
  {
    id: "guarana",
    name: "Guaraná Antarctica",
    description: "Refrigerante gelado 350ml",
    price: 5.50,
    category: "refrigerante",
    image: "🥤",
    size: "350ml"
  },
  {
    id: "fanta-laranja",
    name: "Fanta Laranja",
    description: "Refrigerante sabor laranja 350ml",
    price: 5.50,
    category: "refrigerante",
    image: "🍊",
    size: "350ml"
  },
  {
    id: "sprite",
    name: "Sprite",
    description: "Refrigerante limão 350ml",
    price: 5.50,
    category: "refrigerante",
    image: "🍋",
    size: "350ml"
  },
  // Sucos
  {
    id: "suco-laranja",
    name: "Suco de Laranja",
    description: "Suco natural de laranja 300ml",
    price: 8.00,
    category: "suco",
    image: "🍊",
    size: "300ml"
  },
  {
    id: "suco-maracuja",
    name: "Suco de Maracujá",
    description: "Suco natural de maracujá 300ml",
    price: 8.00,
    category: "suco",
    image: "🥭",
    size: "300ml"
  },
  {
    id: "suco-limao",
    name: "Limonada Suíça",
    description: "Limonada cremosa 300ml",
    price: 9.00,
    category: "suco",
    image: "🍋",
    size: "300ml"
  },
  // Água
  {
    id: "agua-mineral",
    name: "Água Mineral",
    description: "Água mineral sem gás 500ml",
    price: 4.00,
    category: "agua",
    image: "💧",
    size: "500ml"
  },
  {
    id: "agua-gas",
    name: "Água com Gás",
    description: "Água mineral com gás 500ml",
    price: 4.50,
    category: "agua",
    image: "💧",
    size: "500ml"
  },
  // Milkshakes
  {
    id: "milkshake-chocolate",
    name: "Milkshake Chocolate",
    description: "Milkshake cremoso de chocolate 400ml",
    price: 15.00,
    category: "milkshake",
    image: "🍫",
    size: "400ml"
  },
  {
    id: "milkshake-morango",
    name: "Milkshake Morango",
    description: "Milkshake cremoso de morango 400ml",
    price: 15.00,
    category: "milkshake",
    image: "🍓",
    size: "400ml"
  },
  {
    id: "milkshake-ovomaltine",
    name: "Milkshake Ovomaltine",
    description: "Milkshake com Ovomaltine crocante 400ml",
    price: 17.00,
    category: "milkshake",
    image: "🥛",
    size: "400ml"
  },
  // Cervejas
  {
    id: "heineken",
    name: "Heineken",
    description: "Cerveja premium long neck 330ml",
    price: 12.00,
    category: "cerveja",
    image: "🍺",
    size: "330ml"
  },
  {
    id: "budweiser",
    name: "Budweiser",
    description: "Cerveja americana long neck 330ml",
    price: 10.00,
    category: "cerveja",
    image: "🍺",
    size: "330ml"
  },
];

export const drinkCategories = [
  { id: "refrigerante", label: "Refrigerantes", icon: "🥤" },
  { id: "suco", label: "Sucos", icon: "🍊" },
  { id: "milkshake", label: "Milkshakes", icon: "🥛" },
  { id: "agua", label: "Águas", icon: "💧" },
  { id: "cerveja", label: "Cervejas", icon: "🍺" },
];
