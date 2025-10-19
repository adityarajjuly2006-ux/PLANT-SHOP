import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // { id, name, price, image, category, quantity }
  totalItems: 0,
  totalCost: 0,
};

const findIndex = (items, id) => items.findIndex(i => i.id === id);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload;
      const idx = findIndex(state.items, plant.id);
      if (idx === -1) {
        state.items.push({ ...plant, quantity: 1 });
      } else {
        state.items[idx].quantity += 1;
      }
      state.totalItems += 1;
      state.totalCost = Number((state.totalCost + plant.price).toFixed(2));
    },
    increment: (state, action) => {
      const id = action.payload;
      const idx = findIndex(state.items, id);
      if (idx !== -1) {
        state.items[idx].quantity += 1;
        state.totalItems += 1;
        state.totalCost = Number((state.totalCost + state.items[idx].price).toFixed(2));
      }
    },
    decrement: (state, action) => {
      const id = action.payload;
      const idx = findIndex(state.items, id);
      if (idx !== -1) {
        const item = state.items[idx];
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalItems -= 1;
          state.totalCost = Number((state.totalCost - item.price).toFixed(2));
        } else {
          // remove item
          state.totalItems -= 1;
          state.totalCost = Number((state.totalCost - item.price).toFixed(2));
          state.items.splice(idx, 1);
        }
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const idx = findIndex(state.items, id);
      if (idx !== -1) {
        const item = state.items[idx];
        state.totalItems -= item.quantity;
        state.totalCost = Number((state.totalCost - item.price * item.quantity).toFixed(2));
        state.items.splice(idx, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalCost = 0;
    }
  }
});

export const { addToCart, increment, decrement, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
