import './styleDetails.css';
import agendaImg from '../img/agenda.jpg';

const Details = ({id, name, category, description, price, stock, onSendToCart,}) => {
  return(
    <div className='card'>
            <img className='cardImage' src={agendaImg} alt='agenda' />
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
}



export default Details;