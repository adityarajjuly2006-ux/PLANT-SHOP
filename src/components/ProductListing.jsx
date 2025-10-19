import React from 'react';
import { useSelector } from 'react-redux';
import PlantCard from './PlantCard';

export default function ProductListing() {
  const plants = useSelector(state => state.plants || []);
  const categories = Array.from(new Set(plants.map(p => p.category)));

  return (
    <div className="container">
      <h2>Product Listing</h2>
      {categories.map(cat => (
        <div key={cat} className="category">
          <h3>{cat}</h3>
          <div className="plant-grid">
            {plants.filter(p => p.category === cat).map(plant => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
