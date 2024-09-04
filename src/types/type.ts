export type Product = {
  id: number;
  name: string;
  brand: string;
  quantity: number;
  price: number;
  rating: number;
  image: string;
  description:string;
};

export interface CartItem extends Product {
  quantityInCart: number; // Track the quantity of the product in the cart
}

export interface CartState {
  items: CartItem[];
}

