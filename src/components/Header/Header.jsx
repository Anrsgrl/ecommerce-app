import React, { useState } from 'react';
import "./header.scss";
import logo from "../../assets/images/logoDark.png";
import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
    const [hamburger, setHamburger] = useState(false);
    const [headerColor, setHeaderColor] = useState(false);
    const changeColor = () => {
        setHamburger(false)
        if (window.scrollY >= 96) {
            setHeaderColor(true);
        } else {
            setHeaderColor(false);
        }
    };
    window.addEventListener('scroll', changeColor);
    return (
        <header className={headerColor ? "scroll-header" : ""}>
            <div className="header-content">
                <div className="logo-field">
                    <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
                </div>
                <div className="navbar-field">
                    <div className="page-part">
                        <NavLink to="/">Home</NavLink >
                        <NavLink to="/shop">Shop</NavLink >
                        <NavLink to="/favorites">Favorites</NavLink >
                    </div>
                    <div className="icon-part">
                        <NavLink to="/cart">
                            <AiOutlineShoppingCart />
                            <span className='cart-quantity'>12</span>
                        </NavLink>
                    </div>
                    <div className="hamburger-menu">
                        <button onClick={() => setHamburger(!hamburger)} className='hamburger-button'><CiMenuFries /></button>
                        <ul className={hamburger ? 'hamburger-items hamburger-active' : 'hamburger-items'}>
                            <li><button onClick={() => setHamburger(false)}><NavLink to="/">Home</NavLink ></button></li>
                            <li><button onClick={() => setHamburger(false)}><NavLink to="/shop">Shop</NavLink ></button></li>
                            <li><button onClick={() => setHamburger(false)}><NavLink to="/favorites">Favorites</NavLink ></button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;