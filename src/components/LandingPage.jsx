import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="landing">
      <div className="card">
        <h1>Green Haven Plant Shop</h1>
        <p>We provide healthy houseplants delivered to your door — brighten your space with nature.</p>
        <Link to="/products"><button>Get Started</button></Link>
      </div>
    </div>
  );
}
