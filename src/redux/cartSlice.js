import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalItems: 0,
  totalCost: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload;
      const existing = state.items.find(item => item.id === plant.id);
      if (!existing) {
        state.items.push({ ...plant, quantity: 1 });
        state.totalItems += 1;
        state.totalCost += plant.price;
      }
    },
    increment: (state, action) => {
      const plant = state.items.find(item => item.id === action.payload);
      if (plant) {
        plant.quantity += 1;
        state.totalItems += 1;
        state.totalCost += plant.price;
      }
    },
    decrement: (state, action) => {
      const plant = state.items.find(item => item.id === action.payload);
      if (plant && plant.quantity > 1) {
        plant.quantity -= 1;
        state.totalItems -= 1;
        state.totalCost -= plant.price;
      }
    },
    removeFromCart: (state, action) => {
      const plant = state.items.find(item => item.id === action.payload);
      if (plant) {
        state.totalItems -= plant.quantity;
        state.totalCost -= plant.price * plant.quantity;
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
  },
});

export const { addToCart, increment, decrement, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
