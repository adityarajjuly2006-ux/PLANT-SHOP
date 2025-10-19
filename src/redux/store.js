import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import plantsReducer from './plantsSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    plants: plantsReducer,
  },
});
