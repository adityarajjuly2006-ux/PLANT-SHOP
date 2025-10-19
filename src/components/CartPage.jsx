import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, removeFromCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      <p className="small">Total items: {cart.totalItems} • Total cost: ${cart.totalCost}</p>

      {cart.items.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Shop now</Link></p>
      ) : (
        cart.items.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div style={{flex:1}}>
              <h3>{item.name}</h3>
              <p className="small">Unit price: ${item.price}</p>
              <p className="small">Quantity: {item.quantity}</p>
            </div>
            <div className="qty-controls">
              <button onClick={() => dispatch(increment(item.id))}>+</button>
              <button onClick={() => dispatch(decrement(item.id))}>-</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
            </div>
          </div>
        ))
      )}

      <div className="totals">
        <div>Total items: {cart.totalItems}</div>
        <div>Total cost: ${cart.totalCost}</div>
      </div>

      <div style={{ marginTop: 16 }}>
        <button onClick={() => alert('Checkout Coming Soon!')} style={{ marginRight: 12 }}>Checkout</button>
        <Link to="/products"><button>Continue Shopping</button></Link>
      </div>
    </div>
  );
}
