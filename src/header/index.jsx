import React from 'react';
import './style.css';
import './estilo.css'
import Cart from './cart'

const Header = ({menuItem, logoImg}) => {
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
                <Cart cartNumber={1} />
            </nav>
        </header>
    )
}

export default Header;
