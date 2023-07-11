import React from "react";
<<<<<<< HEAD
import './style.css';
=======
import './estilo.css';
>>>>>>> 7278b23a88b4c48f2664854448a0a571847b4baa
import logoImg from "../img/logo.png";
import Cart from "./cart"


<<<<<<< HEAD
const Header = ({ menuItem, logoImg }) => {
    return (
        <header className="header">
            <img src={logoImg} className="logoImg" alt="logo" />
=======
const Header = ({menuItem, logoImg}) => {
    return (
        <header className="header">
          <img src={logoImg} className="logoImg" alt="logo" />
>>>>>>> 7278b23a88b4c48f2664854448a0a571847b4baa
            <input type="checkbox" className="side-menu" id="side-menu" />
            <label className="hamb" htmlFor="side-menu">
                <span className="hamb-line"></span>
            </label>
            <nav className="nav">
                <ul className="menu">
<<<<<<< HEAD
                    <li><a href="#">Sobre mi</a> </li>
                    <li><a href="./card-store/index.jsx">Servicios</a></li>
=======
                    <li><a href="#">Sobre mi</a></li>
                    <li><a href="#">Servicios</a></li>
>>>>>>> 7278b23a88b4c48f2664854448a0a571847b4baa
                    <li><a href="#">Formulario</a></li>
                </ul>
                <Cart cartNumber={1} />
            </nav>
        </header>
    )
}

export default Header;
