import React, { useState } from "react";
import "./styles.scss";
import { HashLink as Link } from "react-router-hash-link";
import { useScroll } from "../hooks/useScroll";

const Header = () => {
  const [isMobile, setIsMobile] = useState(true);
  const { y, x, scrollDirection } = useScroll();

  const styles = {
    active: {
      visibility: "visible",
      transition: "all 0.5s",
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)",
    },
  };

  return (
    <>
      <header className="header">
        <Link smooth to="#home" className="logo">
          <i className="fas fa-paw"></i>PetShop
        </Link>
        <nav className={isMobile ? "navbar" : "nav-links"}>
          <Link to="/" className="lin" exact>
            Home
          </Link>
          <Link to="/about" className="lin" exact>
            About
          </Link>
          <Link to="/shop" className="lin">
            Shop
          </Link>
          <Link to="/services" className="lin">
            Services
          </Link>
          <Link to="/plan" className="lin">
            Plan
          </Link>
          <Link to="/contact" className="lin">
            Contact
          </Link>
        </nav>

        <div className="icons">
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={() => setIsMobile(!isMobile)}
          ></div>
          <Link to="/cart" className="fas fa-shopping-cart"></Link>
          <Link to="/signin"><div className="fas fa-user"></div></Link>
        </div>
      </header>
    </>
  );
};

export default Header;
