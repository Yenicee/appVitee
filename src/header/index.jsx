import React, { useContext } from 'react';
import './style.css';
import Cart from './cart'
import { CartContext } from '../context/cart-context';

const Header = ({ menuItem, logoImg }) => {
    const { cart } = useContext(CartContext);
    return (
        <header className="header">
            <img src={logoImg} className="logoImg" alt="logo" />


            <input type="checkbox" className="side-menu" id="side-menu" />
            <label className="hamb" htmlFor="side-menu">
                <span className="hamb-line"></span>
            </label>
            <nav className="nav">
                <ul className="menu">
                    <li><a href="#">Home</a> </li>
                    <li><a href="./card-store/index.jsx">Productos</a></li>
                    <li><a href="#">Sobre mi</a></li>
                    <li><a href="#">Formulario</a></li>
                </ul>
                <li className='containerCartLi'>
                    <Cart />
                    <div className='cartCounterContainer'>
                    <span className='cartCount'>{cart.length}</span>
                    </div>
                </li>
            </nav>
        </header>
    )
}

export default Header;
