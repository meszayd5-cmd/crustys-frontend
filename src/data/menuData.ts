export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  promoBadge?: string;
  isPopular?: boolean;
  isNew?: boolean;
  spicyLevel?: 0 | 1 | 2 | 3;
  estimatedTime: string;
}

export const CATEGORIES = [
  "Burgers de bœuf / Beef Burgers",
  "Burgers au poulet / Chicken Burgers",
  "Sandwichs baguette / Baguette Sandwiches",
  "Plateaux / Platters",
  "Entrées / Appetizers",
  "Extras",
  "Boissons froides / Cold Drinks"
] as const;

export type CategoryType = typeof CATEGORIES[number];

export const menuProducts: Product[] = [
  // === Burgers de bœuf / Beef Burgers ===
  {
    id: "beef-double-smash",
    name: "Double smash burger",
    description: "2 galettes de boeuf, fromage cheddar, laitue, cornichon, oignon frais et sauce maison. / 2 beef patties, cheddar cheese, lettuce, pickle, fresh onion and house sauce.",
    price: 16.99,
    category: "Burgers de bœuf / Beef Burgers",
    image: "/images/double_smash_burger.png",
    promoBadge: "Best Seller",
    isPopular: true,
    estimatedTime: "10-12 min"
  },
  {
    id: "beef-smash-burger",
    name: "Smash burger",
    description: "Galette de boeuf, Salades, oignon, cornichons et fromage. / Beef patty, lettuce, onions, pickles and cheese",
    price: 12.99,
    category: "Burgers de bœuf / Beef Burgers",
    image: "/images/smash_burger.png",
    estimatedTime: "8-10 min"
  },
  {
    id: "beef-crustys-burger",
    name: "Crustys burger",
    description: "Galettes de boeuf, oignon, champignons épicé, sauce épicé, salades, poivrons couleurs, jalapeño et fromage mozzarella / Beef patties, onion, spicy mushrooms, spicy sauce, lettuce, colored peppers, jalapeño and mozzarella.",
    price: 14.99,
    category: "Burgers de bœuf / Beef Burgers",
    image: "/images/crustys_burger.png",
    estimatedTime: "10-12 min"
  },
  {
    id: "beef-patty-burger",
    name: "Beef Patty burger",
    description: "Galette de boeuf, salades, cornichon, oignon, fromage frit et sauce maison / Beef patty, salads, pickle, onion, fried cheese and homemade sauce.",
    price: 14.99,
    category: "Burgers de bœuf / Beef Burgers",
    image: "/images/beef_patty_burger.png",
    estimatedTime: "10-12 min"
  },
  {
    id: "beef-champignon",
    name: "Burger cheese mushroom",
    description: "Galette de viande, laitue, cornichons, fromage cheddar jaune, champignon grillé, oignon, sauce maison et sauce mayonnaise. / Meat patty, lettuce, pickles, yellow cheddar cheese, grilled mushroom, onion, house sauce and mayo.",
    price: 22.99,
    category: "Burgers de bœuf / Beef Burgers",
    image: "/images/burger_cheese_mushroom.png",
    isNew: true,
    estimatedTime: "10-12 min"
  },
  {
    id: "beef-rondelle-oignon",
    name: "Onion rings burger",
    description: "2 galettes de boeuf, fromage cheddar, cornichon, oignon caramélisé, rondelles d'oignons frites et sauce maison. / 2 beef patties, cheddar cheese, pickle, caramelized onion, fried onion rings and house sauce.",
    price: 14.99,
    category: "Burgers de bœuf / Beef Burgers",
    image: "/images/onion_rings_burger.png",
    estimatedTime: "10-12 min"
  },

  // === Burgers au poulet / Chicken Burgers ===
  {
    id: "chicken-fried-chicken",
    name: "Fried chicken burger",
    description: "Poulet croustillant, laitue, cornichon, fromage cheddar jaune et sauce maison. / Crispy chicken, lettuce, pickle, yellow cheddar cheese and house sauce.",
    price: 21.99,
    category: "Burgers au poulet / Chicken Burgers",
    image: "/images/fried_chicken_burger.png",
    isPopular: true,
    estimatedTime: "10-12 min"
  },
  {
    id: "chicken-mushroom",
    name: "Chicken mashroom burger",
    description: "Crispy fried chicken topped with sautéed mushrooms, melted cheese, fresh lettuce, and a savory sauce in a soft bun.",
    price: 22.99,
    category: "Burgers au poulet / Chicken Burgers",
    image: "/images/chicken_mushroom_burger.png",
    estimatedTime: "10-12 min"
  },
  {
    id: "chicken-patty-burger",
    name: "Chicken Patty burger",
    description: "Crispy fried chicken patty, melted cheese, fresh lettuce, and creamy sauce on a soft bun.",
    price: 11.99,
    category: "Burgers au poulet / Chicken Burgers",
    image: "/images/chicken_patty_burger.png",
    estimatedTime: "10-12 min"
  },

  // === Sandwichs baguette / Baguette Sandwiches ===
  {
    id: "baguette-poulet",
    name: "Sous marin poulet 7 \"",
    description: "Baguette de poitrine de poulet de 7 pouces avec oignons caramélisés, sauce buffalo, cheddar et fromage mozzarella. / 7 inch chicken breast baguette with caramelized onions, buffalo sauce, cheddar and mozzarella.",
    price: 9.99,
    category: "Sandwichs baguette / Baguette Sandwiches",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80",
    estimatedTime: "12-15 min"
  },
  {
    id: "baguette-boeuf",
    name: "Sous marin boeuf 7 \"",
    description: "Baguette philly steak de 7 pouces. Boeuf avec fromage cheddar aux champignons et oignons caramélisés. / 7 inch philly steak baguette. Beef with cheddar cheese, mushrooms and caramelized onions.",
    price: 10.99,
    category: "Sandwichs baguette / Baguette Sandwiches",
    image: "/images/sous_marin_boeuf.png",
    isPopular: true,
    estimatedTime: "12-15 min"
  },

  // === Plateaux / Platters ===
  {
    id: "platters-mac-attack",
    name: "Poulet mac attack / Mac Attack Chicken",
    description: "Poulet croustillant, frites, macaroni au fromage, oignon et sauce par dessus./Crispy chicken, fries, macaroni and cheese, onion and sauce on top.",
    price: 14.99,
    category: "Plateaux / Platters",
    image: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?auto=format&fit=crop&w=600&q=80",
    promoBadge: "Best Platter",
    isPopular: true,
    estimatedTime: "12-15 min"
  },
  {
    id: "platters-mac-attack-beef",
    name: "Bœuf mac attack / Mac Attack Beef",
    description: "Steak beef ,frites, macaroni au fromage ,onion et sauce par dessus./Beef steak, fries, macaroni and cheese, onion and sauce on top.",
    price: 16.99,
    category: "Plateaux / Platters",
    image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?auto=format&fit=crop&w=600&q=80",
    estimatedTime: "12-15 min"
  },
  {
    id: "tenders-3pcs",
    name: "Fried chicken / 3 pieces",
    description: "3 morceaux poulet croustillant servi avec frites et une sauce au choix./3 pieces of crispy chicken served with fries and sauce of your choice.",
    price: 15.99,
    category: "Plateaux / Platters",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
    estimatedTime: "8-10 min"
  },
  {
    id: "tenders-5pcs",
    name: "Fried chicken / 5 pieces",
    description: "5 morceaux poulet croustillant servi avec frites et une sauce au choix./5 pieces of crispy chicken served with fries and sauce of your choice.",
    price: 20.99,
    category: "Plateaux / Platters",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    estimatedTime: "10-12 min"
  },
  {
    id: "loaded-fries-chicken",
    name: "Loaded fries chicken",
    description: "Poulet croustillant , onion frais, jalapeño, frites, fromage cheddar jaune et sauce maison ./crispy chicken, fresh onion, jalapeño, fries, yellow cheddar cheese and house sauce.",
    price: 14.99,
    category: "Plateaux / Platters",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80",
    isNew: true,
    estimatedTime: "8-10 min"
  },
  {
    id: "loaded-fries-beef",
    name: "Beef loaded fries",
    description: "Steak beef ,onion frais, jalapeño, frites, fromage cheddar jaune et sauce maison ./Beef steak, fresh onion, jalapeño, fries, yellow cheddar cheese and house sauce.",
    price: 15.99,
    category: "Plateaux / Platters",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    estimatedTime: "8-10 min"
  },

  // === Entrées / Appetizers ===
  {
    id: "appetizers-fries",
    name: "Petites frites / Small Fries",
    description: "Frites dorées croustillantes. / Golden crispy French fries.",
    price: 4.99,
    category: "Entrées / Appetizers",
    image: "/images/small_fries.png",
    estimatedTime: "6-8 min"
  },
  {
    id: "appetizers-onion-rings",
    name: "Rondelles d'oignon / Onion Rings",
    description: "Crispy onion rings, available in small or large sizes.",
    price: 8.99,
    category: "Entrées / Appetizers",
    image: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?auto=format&fit=crop&w=600&q=80",
    estimatedTime: "6-8 min"
  },
  {
    id: "appetizers-large-fries",
    name: "Grandes frites / Large Fries",
    description: "Frites dorées croustillantes. / Golden crispy French fries.",
    price: 9.99,
    category: "Entrées / Appetizers",
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=600&q=80",
    estimatedTime: "6-8 min"
  },
  {
    id: "platters-mac-cheese",
    name: "Macaroni au fromage / Mac & Cheese",
    description: "Macaroni au fromage servi avec une sauce au choix par dessus./Mac and cheese served with a sauce of your choice on top.",
    price: 7.99,
    category: "Entrées / Appetizers",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80",
    estimatedTime: "8-10 min"
  },

  // === Extras ===
  {
    id: "extras-sauce",
    name: "Sauce",
    description: "Sauce supplémentaire pour accompagner vos plats. / Extra sauce to accompany your dishes.",
    price: 0.99,
    category: "Extras",
    image: "/images/sauce_extras.png",
    estimatedTime: "1 min"
  },
  {
    id: "extras-poulet",
    name: "Poulet / Chicken",
    description: "Portion supplémentaire de poulet croustillant savoureux. / Extra side portion of flavorful crispy chicken.",
    price: 5.99,
    category: "Extras",
    image: "/images/chicken_extras.png",
    estimatedTime: "2 min"
  },
  {
    id: "extras-boeuf",
    name: "Bœuf / Beef",
    description: "Portion supplémentaire de viande de bœuf assaisonnée. / Extra side portion of seasoned beef steak.",
    price: 5.99,
    category: "Extras",
    image: "/images/beef_extras.png",
    estimatedTime: "2 min"
  },

  // === Boissons froides / Cold Drinks ===
  {
    id: "drinks-sprite",
    name: "Sprite",
    description: "Lemon-lime soda with a crisp, refreshing taste.",
    price: 2.99,
    category: "Boissons froides / Cold Drinks",
    image: "/images/sprite_drink.png",
    estimatedTime: "2 min"
  },
  {
    id: "drinks-coca-zero",
    name: "Coke zero / zero Coke",
    description: "A carbonated cola offering the classic Coke taste with zero sugar.",
    price: 2.99,
    category: "Boissons froides / Cold Drinks",
    image: "/images/coke_zero_drink.png",
    estimatedTime: "2 min"
  },
  {
    id: "drinks-ice-tea",
    name: "Thé glacé / Iced Tea",
    description: "Iced tea, a refreshing beverage brewed from tea leaves, typically served over ice. It may be enjoyed plain or with a hint of lemon.",
    price: 2.99,
    category: "Boissons froides / Cold Drinks",
    image: "/images/iced_tea_drink.png",
    estimatedTime: "2 min"
  },
  {
    id: "drinks-canada-dry",
    name: "Canada Dry",
    description: "Effervescent ginger ale, perfectly crisp with a refreshing finish.",
    price: 2.99,
    category: "Boissons froides / Cold Drinks",
    image: "/images/canada_dry_drink.png",
    estimatedTime: "2 min"
  },
  {
    id: "drinks-crush",
    name: "Crush",
    description: "Effervescent orange soda with a bright citrus flavor.",
    price: 2.99,
    category: "Boissons froides / Cold Drinks",
    image: "/images/crush_drink.png",
    estimatedTime: "2 min"
  },
  {
    id: "drinks-water",
    name: "Eau 500 ml / Water 500 ml",
    description: "A 500 ml bottle of water, offering hydration with every sip.",
    price: 2.00,
    category: "Boissons froides / Cold Drinks",
    image: "/images/water_bottle_drink.png",
    estimatedTime: "2 min"
  }
];
