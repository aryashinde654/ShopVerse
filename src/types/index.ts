export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  comparePrice?: number;
  sku: string;
  categoryId: string;
  brand: string;
  stockQuantity: number;
  isActive: boolean;
  featured: boolean;
  weight?: number;
  rating: number;
  reviewCount: number;
  images: ProductImage[];
  specifications?: Record<string, string>;
  createdAt: string;
}

export interface ProductImage {
  id: string;
  url: string;
  altText: string;
  sortOrder: number;
  isPrimary: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  parentId?: string;
  children?: Category[];
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  addedAt: string;
}

export interface CartSession {
  id: string;
  items: CartItem[];
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  productId: string;
  reviewerName: string;
  rating: number;
  reviewText: string;
  createdAt: string;
  isVerified: boolean;
}

export interface FilterOptions {
  categories: string[];
  brands: string[];
  priceRange: [number, number];
  rating: number;
  inStock: boolean;
}

export interface SortOption {
  value: string;
  label: string;
}