import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div>
      <h1>Carrito</h1>
      <div className="cart">
        <Link to="/cart">
          <span className="cart-number"></span>
          <FaShoppingCart className="cart-icon" />
        </Link>
      </div>
    </div>
  )
}

export default Cart;