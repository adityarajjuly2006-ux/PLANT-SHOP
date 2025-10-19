import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Fiddle Leaf Fig', price: 50, category: 'Indoor', image: 'https://images.unsplash.com/photo-1524594154904-0c6e3b3d2769?auto=format&fit=crop&w=800&q=60' },
  { id: 2, name: 'Snake Plant', price: 30, category: 'Indoor', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60' },
  { id: 3, name: 'Aloe Vera', price: 20, category: 'Succulent', image: 'https://images.unsplash.com/photo-1524594154935-5b0f1d721073?auto=format&fit=crop&w=800&q=60' },
  { id: 4, name: 'Monstera', price: 40, category: 'Indoor', image: 'https://images.unsplash.com/photo-1501004318646-6a9bd85f3ace?auto=format&fit=crop&w=800&q=60' },
  { id: 5, name: 'Cactus', price: 15, category: 'Succulent', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60' },
  { id: 6, name: 'Peace Lily', price: 35, category: 'Outdoor', image: 'https://images.unsplash.com/photo-1520975928085-0aa1b45a7a88?auto=format&fit=crop&w=800&q=60' },
];

const plantsSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {}
});

export default plantsSlice.reducer;
