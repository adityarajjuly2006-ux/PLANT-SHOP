import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const totalItems = useSelector(state => state.cart.totalItems);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#d4f0e7' }}>
      <h1>Plant Shop</h1>
      <nav>
        <Link to="/products" style={{ marginRight: '15px' }}>Products</Link>
        <Link to="/cart">Cart 🛒 {totalItems}</Link>
      </nav>
    </header>
  );
};

export default Header;
