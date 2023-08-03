import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/cart-context';
import { firebaseServices } from '../pages/services/firebase/firebase';

function Cart() {
  const navigate = useNavigate();
  const { cart, onSendToCart, onDecreaseCartItem, onRemoveCartItem, sumTotalCart, getItemQuantity, total } = useContext(CartContext)

  const onHandlerCreateCart = async () => {
    const newCart = {
      buyer: {
        buyer: {
          id: 1,
        },
        items: cart,
        createdAt: new Date(),
        total: total,
        status: 'pending',
      }
    }
    const cartId = await firebaseServices.createCart(newCart)

    return cartId
  }

  const onHandlerCheckout = async () =>{
    const cartId = await onHandlerCreateCart()
    navigate('/checkout', { state: { cartId: cartId.id } })
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
              <p className='cartTotal'> Total: ${0}</p>
              <button onClick={onHandlerCheckout} className='cartCheckout'>Checkout</button>
            </div>

          )
        }
      </div>
    </div>
  )
}

export default Cart;