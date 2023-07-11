import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './header';
import logoImg from './img/logo.png';
import imgVite from './img/img-vite.png';
import CardStore from './card-store';
import Input from './input-card/input';

function App() {
  const [task, setTask] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [product, setProducts] = useState([]);
  const [showDetails, setShowDetails] = useState(true);
  const [productDetail, setProductDetail] = useState(null);

  const onChange = (event) => {
    const value = event.target.value;
    setTask(value);
  };

  const onFocus = () => {
    setActive(false);
  };

  const onBlur = () => {
    setActive(false);
  };

  const onShowDetails = (id) => {
    setShowDetails(true);
    const findProduct = product.find((product) => product.id === id);
    setProductDetail(findProduct);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer algo con los datos ingresados, como llamar a una API
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch('https://64a6d02f096b3f0fcc80a680.mockapi.io/product', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, []);

  return (
    <div>
      <Header logoImg={logoImg} />

      <div className='container-img'>
        <h1>
          Creacion
          <hr />
          <b>
            <i>De</i>
          </b>
          <hr /> Tutorias
        </h1>
        <div className='img-fondo'>
          <img src={imgVite} alt='fondo' />
        </div>
      </div>

      <div className='content-container'>
        <div className='login-from'>
          <form onSubmit={handleSubmit}>
            <div className='user-box'>
              <label>
                Nombre:
                <input type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} />
              </label>
            </div>
            <div className='user-box'>
              <label>
                Email:
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
            </div>
            <div className='user-box'>
              <label>
                Password:
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>
            </div>
            <div className='user-box'>
              <button type='submit'>Enviar</button>
            </div>
          </form>
        </div>
        <h1 className='formh1'>Programar es duro <hr />pero aquí te enseño.</h1>
      </div>

      <div className='containerH2'>
        <h2>Nuestros Productos</h2>
      </div>
    
      <div className='inputContainer'>
        <Input placeholder='find a product' id='task' required={true} name='Search' onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
      </div>
      <div className='cardContainer'>
        {product.map((product) => (
          <CardStore key={product.id} {...product} onShowDetails={onShowDetails} />
        ))}
      </div>
    </div>
  );
}

export default App;
