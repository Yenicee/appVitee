import React, { useContext } from 'react';
import './style.css';
import Cart from './cart'
import { CartContext } from '../context/cart-context';
import { Link } from 'react-router-dom';

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
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/product'>Productos</Link></li>
                    <li><Link to='/aboutMy'>Sobre mi</Link></li>
                    <li><Link to='/form'>Formulario</Link></li>
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
