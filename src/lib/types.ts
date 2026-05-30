export interface User {
  id: string;
  email: string;
  fullName: string;
  firstName: string;
  lastName: string;
  avatar?: string | null;
  phone?: string | null;
  isVerified: boolean;
  isActive: boolean;
  role: 'CUSTOMER' | 'ADMIN';
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  image?: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductImage {
  id: string;
  productId: string;
  imageUrl: string;
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
  category?: Category;
  calories?: number | null;
  discountPrice?: number | null;
  isAvailable: boolean;
  isFeatured: boolean;
  stockQuantity: number;
  images?: ProductImage[];
  promoBadge?: string;
  isPopular?: boolean;
  isNew?: boolean;
  estimatedTime?: string;
  spicyLevel?: number | null;
  createdAt: string;
  updatedAt: string;
}

export type OrderStatus = 'PENDING' | 'CONFIRMED' | 'PREPARING' | 'DELIVERING' | 'DELIVERED' | 'CANCELLED';
export type PaymentStatus = 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED';
export type PaymentMethod = 'CARD' | 'CASH' | 'STRIPE';

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  product?: Product;
  quantity: number;
  unitPrice: number;
  subtotal: number;
}

export interface Order {
  id: string;
  userId?: string | null;
  user?: User | null;
  orderNumber: string;
  customerAddress?: string | null;
  customerPhone: string;
  deliveryType: string;
  notes?: string | null;
  orderStatus: OrderStatus;
  paymentStatus: PaymentStatus;
  totalPrice: number;
  items: OrderItem[];
  createdAt: string;
  updatedAt: string;
}

export type ReservationStatus = 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';

export interface Reservation {
  id: string;
  userId?: string | null;
  user?: User | null;
  customerName: string;
  customerPhone: string;
  customerEmail?: string | null;
  guestsCount: number;
  reservationDate: string;
  reservationTime: string;
  status: ReservationStatus;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Testimonial {
  id: string;
  customerName: string;
  message: string;
  rating: number;
  isApproved: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken?: string;
}
