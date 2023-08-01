import { memo } from 'react';
import './style.css';


const CardStore = memo(({id, image, name, category, description, price, stock, onSendToCart, onShowDetails}) => {
    return(
      <div key={id} className='card' onClick={() => onShowDetails(id)}>
              {/* <img className='cardImage' src={image} alt={image} /> */}
              <div className='cardContent'>
                <h2 className='cardName'>{name}</h2>
                <p className='cardCategory'>{category}</p>
                <p className='cardDescription'>{description}</p>
                <p className='cardPrice'>${price}</p>
                <p className='cardStock'>{stock} left</p>
              </div>
              <div className='cardActions'>
                <button onClick= {()=> onSendToCart(id)} className='cardButton'>send to cart</button>
              </div>
            </div>
    )
  });
  
  
  
  
  export default CardStore;