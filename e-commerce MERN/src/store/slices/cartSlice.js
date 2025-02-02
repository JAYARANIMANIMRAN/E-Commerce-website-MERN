import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : { cartItems: [] };
  } catch (error) {
    console.error('Error loading cart from storage:', error);
    return { cartItems: [] };
  }
};

const saveCartToStorage = (cartItems) => {
  try {
    localStorage.setItem('cart', JSON.stringify({ cartItems }));
  } catch (error) {
    console.error('Error saving cart to storage:', error);
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadCartFromStorage(),
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i._id === item._id);
      
      if (existingItem) {
        existingItem.quantity += item.quantity || 1;
        toast.success('Item quantity updated in cart!');
      } else {
        state.cartItems.push({
          _id: item._id,
          name: item.name,
          price: item.price,
          image: item.image,
          quantity: item.quantity || 1
        });
        toast.success('Item added to cart!');
      }
      saveCartToStorage(state.cartItems);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      toast.success('Item removed from cart!');
      saveCartToStorage(state.cartItems);
    },
    updateQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      const item = state.cartItems.find((i) => i._id === _id);
      if (item) {
        item.quantity = Math.max(1, quantity);
        toast.success('Cart updated!');
        saveCartToStorage(state.cartItems);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      toast.success('Cart cleared!');
      localStorage.removeItem('cart');
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

// Selector to calculate total price
export const selectCartTotal = (state) => {
  return state.cart.cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
};

// Selector to get total items count
export const selectCartItemsCount = (state) => {
  return state.cart.cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
};

export default cartSlice.reducer;
