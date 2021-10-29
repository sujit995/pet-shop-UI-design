import React, { useState } from 'react'
import './styles.scss';
import { Link } from 'react-router-dom';
import LoginForm from './loginForm';

const Header = () => {
    const [visible, setVisible] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    return (
        <>
            <header className="header">
                <Link to="/" className="logo"><i className="fas fa-paw"></i>PetShop</Link>
                <nav className={isMobile ? "navbar" : "nav-links"}>
                    <Link to="/" className="lin">Home</Link>
                    <Link to="/about" className="lin">About</Link>
                    <Link to="/shop" className="lin">Shop</Link>
                    <Link to="/services" className="lin">Services</Link>
                    <Link to="/plan" className="lin">Plan</Link>
                    <Link to="/contact" className="lin">Contact</Link>
                </nav>

                <div className="icons">
                    <div className="fas fa-bars" id="menu-btn" onClick={() => setIsMobile(!isMobile)}></div>
                    <Link to="/cart" className="fas fa-shopping-cart"></Link>
                    <div className="fas fa-user" onClick={() => setVisible(!visible)}></div>
                </div>
                {
                    visible && <LoginForm />
                }

            </header>
        </>
    )
}

export default Header
