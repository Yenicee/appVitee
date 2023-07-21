import './style.css';


const CardStore = ({ id, name, category, description, price, stock, onSendToCart, onShowDetails }) => {
  return (
    <div className='card'>
      <button className='cartButtonContainer'  key={id} type='button' onClick={() => onShowDetails(id)}>
        <div className='cardContent'>
          <h2 className='cardName'>{name}</h2>
          <p className='cardCategory'>{category}</p>
          <p className='cardDescription'>{description}</p>
          <p className='cardPrice'>${price}</p>
          <p className='cardStock'>{stock} left</p>
        </div>
      </button>

      <div>
        <button onClick={() => onSendToCart(id)} className='cardButton'>send to cart</button>
      </div>
    </div>
  )
}




export default CardStore;