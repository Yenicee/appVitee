import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/cart-context';

function Cart() {
  const navigate = useNavigate();
  const { cart, onSendToCart, onDecreaseCartItem, onRemoveCartItem, sumTotalCart, } = useContext(CartContext)

  const onHandlerCheckout = () =>{
    navigate('/checkout')

  }

  return (
    <div>
      <div className="cart">
        <Link to="/cart">
          <span className="cart-number"></span>
          <FaShoppingCart className="cart-icon" />
        </Link>
      </div>
      <h2>Carrito</h2>
      <div className='cartContainer'>
        {cart.length === 0 && <h2>carrito vacio</h2>}
        {
          cart?.length > 0 && cart.map((product) => (
            <div key={product.id} className='cartItem'>
              <p className='cartName'>{product.name}</p>
              <p className='cartQuantity'>qty:{product.quantity}</p>
              <p className='cartPrice'>${product.price}</p>
              <p className='cartStock'>{product.stock} left</p>
              <div className='cartActions'>
                <button onClick={() => onSendToCart(product.id)} className='buttonAdd'>+</button>
                <button onClick={() => onDecreaseCartItem(product.id)} className='buttonDecrease'>-</button>
                <button onClick={() => onRemoveCartItem(product.id)} className='buttonRemove'>Remove</button>

              </div>
            </div>
          ))
        }
        {
          cart?.length > 0 && (
            <div>
              <p className='cartTotal'> Total: ${sumTotalCart}</p>
              <button onClick={onHandlerCheckout} className='cartCheckout'>Checkout</button>
            </div>

          )
        }
      </div>
    </div>
  )
}

export default Cart;