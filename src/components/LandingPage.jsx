import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{
      height: '90vh',
      backgroundImage: 'url(https://images.unsplash.com/photo-plant.jpg)',
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }}>
      <h1>Welcome to Plant Shop</h1>
      <p>Your one-stop shop for beautiful houseplants.</p>
      <Link to="/products">
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
