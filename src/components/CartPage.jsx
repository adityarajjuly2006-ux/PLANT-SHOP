import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, removeFromCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Shopping Cart</h2>
      <p>Total Items: {cart.totalItems}</p>
      <p>Total Cost: ${cart.totalCost}</p>

      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.items.map(item => (
          <div key={item.id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
            <div>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <button onClick={() => dispatch(increment(item.id))}>+</button>
              <button onClick={() => dispatch(decrement(item.id))}>-</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
            </div>
          </div>
        ))
      )}

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => alert('Coming Soon!')} style={{ marginRight: '10px' }}>Checkout</button>
        <Link to="/products">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
