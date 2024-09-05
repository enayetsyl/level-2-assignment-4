export type Product = {
  _id: string;
  name: string;
  brand: string;
  quantity: number;
  price: number;
  rating: number;
  image: string;
  description:string;
  createdAt?: string; 
};

export interface CartItem extends Product {
  quantityInCart: number; // Track the quantity of the product in the cart
}

export interface CartState {
  items: CartItem[];
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}