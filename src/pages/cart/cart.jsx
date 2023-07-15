import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Cart = ({ cartNumber }) => {
  return (
    <div className="cart">
      <span className="cart-number">{cartNumber}</span>
      <FaShoppingCart className="cart-icon" />
    </div>
  );
}

export default Cart;