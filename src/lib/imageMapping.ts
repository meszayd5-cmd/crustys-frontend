import { Product, Category } from '@/lib/types';
import { menuProducts, CATEGORIES } from '@/data/menuData';

// Centralized image map for products
export const productImageMap: Record<string, string> = {
  "beef-double-smash": "/images/double_smash_burger.png",
  "beef-smash-burger": "/images/smash_burger.png",
  "beef-crustys-burger": "/images/crustys_burger.png",
  "beef-patty-burger": "/images/beef_patty_burger.png",
  "beef-champignon": "/images/burger_cheese_mushroom.png",
  "beef-rondelle-oignon": "/images/onion_rings_burger.png",
  "chicken-fried-chicken": "/images/fried_chicken_burger.png",
  "chicken-mushroom": "/images/chicken_mushroom_burger.png",
  "chicken-patty-burger": "/images/chicken_patty_burger.png",
  "baguette-poulet": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80",
  "baguette-boeuf": "/images/sous_marin_boeuf.png",
  "platters-mac-attack": "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?auto=format&fit=crop&w=600&q=80",
  "platters-mac-attack-beef": "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?auto=format&fit=crop&w=600&q=80",
  "tenders-3pcs": "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
  "tenders-5pcs": "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
  "loaded-fries-chicken": "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80",
  "loaded-fries-beef": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
  "appetizers-fries": "/images/small_fries.png",
  "appetizers-onion-rings": "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?auto=format&fit=crop&w=600&q=80",
  "appetizers-large-fries": "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=600&q=80",
  "platters-mac-cheese": "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80",
  "extras-sauce": "/images/sauce_extras.png",
  "extras-poulet": "/images/chicken_extras.png",
  "extras-boeuf": "/images/beef_extras.png",
  "drinks-sprite": "/images/sprite_drink.png",
  "drinks-coca-zero": "/images/coke_zero_drink.png",
  "drinks-ice-tea": "/images/iced_tea_drink.png",
  "drinks-canada-dry": "/images/canada_dry_drink.png",
  "drinks-crush": "/images/crush_drink.png",
  "drinks-water": "/images/water_bottle_drink.png"
};

// Centralized image map for categories
export const categoryImageMap: Record<string, string> = {
  "Burgers de bœuf / Beef Burgers": "/images/double_smash_burger.png",
  "Burgers au poulet / Chicken Burgers": "/images/fried_chicken_burger.png",
  "Sandwichs baguette / Baguette Sandwiches": "/images/sous_marin_boeuf.png",
  "Plateaux / Platters": "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?auto=format&fit=crop&w=600&q=80",
  "Entrées / Appetizers": "/images/small_fries.png",
  "Extras": "/images/sauce_extras.png",
  "Boissons froides / Cold Drinks": "/images/coke_zero_drink.png"
};

/**
 * Returns the correct local or remote asset path for a product.
 * Standardizes key matching using ID, slug, or name.
 */
export function getProductImage(product: { id?: string; name?: string; slug?: string; image?: string }): string {
  if (!product) return "/images/crustys_logo_clean.png";

  const idKey = (product.id || "").toLowerCase();
  const slugKey = (product.slug || "").toLowerCase();

  // Try matching directly by ID or slug in the map
  if (productImageMap[idKey]) return productImageMap[idKey];
  if (productImageMap[slugKey]) return productImageMap[slugKey];

  // Try fuzzy matching by name
  const name = (product.name || "").toLowerCase();
  for (const [mapKey, path] of Object.entries(productImageMap)) {
    const cleanKey = mapKey.replace(/^(beef|chicken|baguette|platters|appetizers|extras|drinks)-/, "").replace(/-/g, " ");
    if (name.includes(cleanKey) || cleanKey.includes(name)) {
      return path;
    }
  }

  // Fallback to existing product image field
  if (product.image) {
    if (product.image.startsWith("/") || product.image.startsWith("http")) {
      return product.image;
    }
    return `/images/${product.image}`;
  }

  return "/images/crustys_logo_clean.png";
}

/**
 * Returns the correct image path for a category.
 */
export function getCategoryImage(categoryName: string): string {
  return categoryImageMap[categoryName] || "/images/crustys_logo_clean.png";
}

/**
 * Generate categories list locally using the original category data.
 */
export const localCategories: Category[] = CATEGORIES.map((name, index) => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return {
    id: `cat-${index + 1}`,
    name: name,
    slug: slug,
    description: `${name} category`,
    image: getCategoryImage(name),
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
});

/**
 * Generate products list locally using original product data.
 */
export const localProducts: Product[] = menuProducts.map((prod) => {
  const categoryObj = localCategories.find(c => c.name === prod.category);
  return {
    id: prod.id,
    name: prod.name,
    slug: prod.id,
    description: prod.description,
    price: prod.price,
    image: getProductImage(prod),
    categoryId: categoryObj?.id || 'unknown',
    category: categoryObj,
    isAvailable: true,
    isFeatured: ["beef-double-smash", "chicken-fried-chicken", "platters-mac-attack", "loaded-fries-beef"].includes(prod.id),
    stockQuantity: 100,
    promoBadge: prod.promoBadge,
    isPopular: prod.isPopular,
    isNew: prod.isNew,
    estimatedTime: prod.estimatedTime,
    spicyLevel: prod.spicyLevel || 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
});
