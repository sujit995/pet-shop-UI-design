import React, { useState } from 'react'
import './styles.scss';
import { HashLink as Link } from 'react-router-hash-link';
import LoginForm from './loginForm';
import { useScroll } from '../hooks/useScroll';


const Header = () => {
    const [visible, setVisible] = useState(false)
    const [isMobile, setIsMobile] = useState(true)
    const { y, x, scrollDirection } = useScroll();

    const styles = {
        active: {
            visibility: "visible",
            transition: "all 0.5s"
        },
        hidden: {
            visibility: "hidden",
            transition: "all 0.5s",
            transform: "translateY(-100%)"
        }
    }

    return (
        <>
            <header className='header' style={scrollDirection === "down" ? styles.active : styles.hidden}>
                <Link smooth to="#home" className="logo"><i className="fas fa-paw"></i>PetShop</Link>
                <nav className={isMobile ? "navbar" : "nav-links"}>
                    <Link smooth to="#home" className="lin" exact>Home</Link>
                    <Link smooth to="#about" className="lin" exact>About</Link>
                    <Link smooth to="#shop" className="lin">Shop</Link>
                    <Link smooth to="#services" className="lin">Services</Link>
                    <Link smooth to="#plan" className="lin">Plan</Link>
                    <Link smooth to="#contact" className="lin">Contact</Link>
                </nav>

                <div className="icons">
                    <div className="fas fa-bars" id="menu-btn" onClick={() => setIsMobile(!isMobile)}></div>
                    <a href="#cart" className="fas fa-shopping-cart"></a>
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
