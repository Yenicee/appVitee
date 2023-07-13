import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './header';
import logoImg from './img/logo.png';
import imgVite from './img/img-vite.png';
import CardStore from './card-store';
import Input from './input-card/input';
import Details from './details/cardDetails';
import { useFetch } from './hooks/useFetch';

function App() {
  const [search, setSearch] = useState('');
  const [active, setActive] = useState(false);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [productDetail, setProductDetail] = useState(null);
  const [productFiltered, setProductFiltered] = useState([]);

  const { data: product, loading, error } = useFetch('https://64a6d02f096b3f0fcc80a680.mockapi.io/product', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const filterBySearch = (query) => {
    let updatedProductList = [...product];

    updatedProductList = updatedProductList.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setProductFiltered(updatedProductList);
  };

  const onChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    filterBySearch(value);
  };

  const onFocus = () => {
    setActive(true);
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


  console.log({ loading, error, product })

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
          <button>enviar</button>
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
        <h3>Programar es duro <hr />pero aca te enseño.</h3>
      </div>

      <div className='contentContainer'>
        {showDetails ? (
          <Details productDetail={productDetail} />
        ) : (
          <>
            <div>
              <Input
                placeholder='find a product'
                id='task'
                required={true}
                name=''
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                active={active}
              />
            </div>
            <div className='containerH2'>
              <h2 className='nuestroProduc'>Nuestros Productos</h2>
            </div>
            
            <div className='cardContainer'>
              {loading && <h1>Cargando...</h1>}
              {error && <h3>Espere un momento a pasado un error</h3>}
              {search.length > 0 && productFiltered.length === 0 && <h3>Poducto no encontrado</h3>}
              {search.length > 0 ? (
                productFiltered.map((product) => (
                  <CardStore key={product.id} {...product} onShowDetails={onShowDetails} />
                ))
              ) : (
                product.map((product) => (
                  <CardStore key={product.id} {...product} onShowDetails={onShowDetails} />
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
