import React, { useEffect, useState } from 'react';
import './style.css';
import Header from '../../header';
import logoImg from '../../img/logo.png';
import imgVite from '../../img/img-vite.png';
import CardStore from '../../card-store';
import Input from '../../input-card/input';
import Details from '../../details/cardDetails';
import { useFetch } from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import Slider from '../../slider';



function Home() {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [active, setActive] = useState(false);
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFiltered, setIsFiltered] = useState(false);
    const [productDetail, setProductDetail] = useState(null);
    const [productFiltered, setProductFiltered] = useState([]);
    const [cart, setCart] = useState([]);



    const { data, categories, loading: loadingCategories, error: errorCategories } = useFetch('https://64a6d02f096b3f0fcc80a680.mockapi.io/categories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const { data: product, loading: loadingProduct, error: errorProduct } = useFetch(
        'https://64a6d02f096b3f0fcc80a680.mockapi.io/product',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    // const filterBySearch = (query) => {
    //     let updatedProductList = [...product];

    //     updatedProductList = updatedProductList.filter((item) => {
    //         return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    //     });

    //     setProductFiltered(updatedProductList);
    // };

    // const onChange = (event) => {
    //     const value = event.target.value;
    //     setSearch(value);
    //     filterBySearch(value);
    // };

    // const onFocus = () => {
    //     setActive(true);
    // };

    // const onBlur = () => {
    //     setActive(false);
    // };

    const onFilter = (name) => {
        setIsFiltered(true);
        const productByCategory = product.filter((product) => product.category === name);
        setProductFiltered(productByCategory);
    };

    const onShowDetails = (id) => {
        navigate(`/product/${id}`);

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes hacer algo con los datos ingresados, como llamar a una API
    };

    const onSendToCart = (id) => {
        const item = product.find((product) => product.id === id);
        if (!item) {
            // Si el producto no se encuentra, puedes manejar el error aquí si es necesario.
            console.error('El producto no se encontró.');
            return;
        }

        if (cart?.find((product) => product.id === id)?.quantity === Number(item.stock)) {
            // Si la cantidad en el carrito es igual al stock del producto, no agregamos más al carrito.
            return;
        }

        if (cart?.length === 0) {
            // Si el carrito está vacío, agregamos el producto con cantidad 1.
            setCart([{ ...item, quantity: 1 }]);
        } else if (!cart?.find((product) => product.id === id)) {
            // Si el producto no está en el carrito, lo agregamos con cantidad 1.
            setCart([...cart, { ...item, quantity: 1 }]);
        } else {
            // Si el producto ya está en el carrito, actualizamos su cantidad.
            setCart((currentCart) =>
                currentCart.map((product) =>
                    product.id === id ? { ...product, quantity: product.quantity + 1 } : product
                )
            );
        }
    };

    console.log({ cart });

    return (
        <div>
            <div className='container-img'>
                <h1>
                    Creacion
                    <hr />
                    <b>
                        <i>De</i>
                    </b>
                    <hr /> Tutorias
                    <button className='startButton'>enviar</button>
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
                            <button className='startButton' type='submit'>Enviar</button>
                        </div>
                    </form>
                </div>

                <h3>Programar es duro <hr />pero aca te enseño.</h3>
            </div>

            <div className='contentContainer'>
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

                            </div>
                        ))
                    }
                </div>
                <div className='category'>
                    {loadingCategories && <h1>Cargando...</h1>}
                    {errorCategories && <h3>{errorCategories}</h3>}
                    <Slider>
                        {data.map((category) => (
                            <button key={category.id} onClick={() => onFilter(category.name)} type='button' className='categoryContainer'>
                                <p className='categoryName'> {category.name}</p>
                            </button>
                        ))}
                    </Slider>
                </div>

                {/* <div>
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
                </div> */}
                <div className='containerH2'>
                    <h2 className='nuestroProduc'>Nuestros Productos</h2>
                </div>

                <div className='cardContainer'>
                    {loadingProduct && <h1>Cargando...</h1>}
                    {errorProduct && <h3>Espere un momento ha ocurrido un error</h3>}
                    {search.length > 0 && productFiltered.length === 0 && <h3>Producto no encontrado</h3>}
                    {!isFiltered ? (
                        // Mostrar todos los productos cuando no hay filtros activos
                        product.map((product) => (
                            <CardStore
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                name={product.name}
                                category={product.category}
                                description={product.description}
                                price={product.price}
                                stock={product.stock}
                                onShowDetails={onShowDetails}
                                onSendToCart={onSendToCart}
                            />
                        ))
                    ) : (
                        // Mostrar los productos filtrados cuando hay filtros activos
                        productFiltered.map((product) => (
                            <Details
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                name={product.name}
                                category={product.category}
                                description={product.description}
                                price={product.price}
                                stock={product.stock}
                                onShowDetails={onShowDetails}
                                onSendToCart={onSendToCart}
                            />
                        ))
                    )}
                </div>
            </div>
        </div >
    );
}

export default Home;
