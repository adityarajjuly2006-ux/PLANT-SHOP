import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const inCart = useSelector(state => state.cart.items.find(i => i.id === plant.id));

  const handleAdd = () => dispatch(addToCart(plant));

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={handleAdd} disabled={!!inCart}>
        {inCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}
