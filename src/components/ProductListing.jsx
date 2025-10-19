import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductListing = () => {
  const plants = useSelector(state => state.plants);
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Our Plants</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {plants.map((plant) => (
          <div key={plant.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
