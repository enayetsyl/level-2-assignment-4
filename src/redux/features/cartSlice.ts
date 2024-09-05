// cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { CartState, Product } from '../../types/type';
import toast from 'react-hot-toast';


const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;

      // Check if the product is out of stock
      if (product.quantity <= 0) {
        toast.error('Product is out of stock and cannot be added to the cart.');
        return;
      }

      // Find if the product is already in the cart
      const existingProduct = state.items.find((item) => item._id === product._id);

      if (existingProduct) {
        // Check if adding one more exceeds the available stock
        if (existingProduct.quantityInCart >= product.quantity) {
          toast.error('You cannot add more than the available stock.');
          return;
        }

        // Increase the quantity of the existing product in the cart
        existingProduct.quantityInCart += 1;
      } else {
        // Add the product to the cart with a quantity of 1
        state.items.push({ ...product, quantityInCart: 1 });
      }
    },
    increaseItemQuantity: (state, action: PayloadAction<string>) => {
      const product = state.items.find((item) => item._id === action.payload);
      if (product && product.quantityInCart < product.quantity) {
        product.quantityInCart += 1;
      } else{
        toast.error('You cannot add more than the available stock.'); 
      }
    
    },
    decreaseItemQuantity: (state, action: PayloadAction<string>) => {
      const product = state.items.find((item) => item._id === action.payload);
      if (product && product.quantityInCart > 1) {
        product.quantityInCart -= 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item._id !== productId);
    },
    clearCart: (state) => {
      state.items = [];
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantityInCart: number }>) => {
      const { id, quantityInCart } = action.payload;
      const existingProduct = state.items.find((item) => item._id === String(id));


      if (existingProduct) {
        // Ensure the requested quantity doesn't exceed the available stock
        if (quantityInCart <= existingProduct.quantity) {
          existingProduct.quantityInCart = quantityInCart;
        } else {
          toast.error('Requested quantity exceeds available stock.');
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;

// Selector to get cart items from the state
// selector
export const selectCartItems = (state: RootState) => state.cart.items;


export default cartSlice.reducer;
