import './style.css'

const CartItem = ({onSendToCart,onDecreaseCartItem, onRemoveCartItem, id, image, name, price, quantity, stock }) => {
    return (
        <div className='cartItem'>
            <div className='cardImageContainer'>
                <img className='cardImage' src={image} alt={name} />
            </div>
            <div className='cartContentContainer'>
                <p className='cartProductName'>{name}</p>
                <p className='cartPrice'>USD {price}</p>
                <p className='cartQuantity'>qty: {quantity}</p>
                <p className='cartStock'>{stock} left</p>
                <div className='cartActions'>
                    <button onClick={() => onSendToCart(id)} className='cartButttonAdd'>+</button>
                    <button onClick={() => onDecreaseCartItem(id)} className='cartButttonDecrease'>-</button>
                    <button onClick={() => onRemoveCartItem(id)} className='cartButttonRemove'>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem