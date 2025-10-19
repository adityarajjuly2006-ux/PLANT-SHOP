import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const totalItems = useSelector(state => state.cart.totalItems);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none', color: '#0f172a' }}>Plant Shop</Link>
      </div>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart 🛒 {totalItems}</Link>
      </nav>
    </header>
  );
}
