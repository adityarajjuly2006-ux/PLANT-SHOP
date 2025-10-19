import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Fiddle Leaf Fig', price: 50, category: 'Indoor', image: '/images/fiddle.jpg' },
  { id: 2, name: 'Snake Plant', price: 30, category: 'Indoor', image: '/images/snake.jpg' },
  { id: 3, name: 'Aloe Vera', price: 20, category: 'Succulent', image: '/images/aloe.jpg' },
  { id: 4, name: 'Monstera', price: 40, category: 'Indoor', image: '/images/monstera.jpg' },
  { id: 5, name: 'Cactus', price: 15, category: 'Succulent', image: '/images/cactus.jpg' },
  { id: 6, name: 'Peace Lily', price: 35, category: 'Outdoor', image: '/images/peace.jpg' },
];

const plantsSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {},
});

export default plantsSlice.reducer;
