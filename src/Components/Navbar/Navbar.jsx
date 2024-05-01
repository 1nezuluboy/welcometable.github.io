import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menuIcon from "../../assets/menuIcon.png";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className="container">
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hideMobileMenu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} offset={-260} duration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link to="hotel" smooth={true} offset={-260} duration={500}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="menu" smooth={true} offset={-260} duration={500}>
            Menus
          </Link>
        </li>
        <li>
          <button className="btn">
            <Link to="contact" smooth={true} offset={-260} duration={500}>
              Contact us
            </Link>
          </button>
        </li>
      </ul>
      <img src={menuIcon} alt="" className="menuIcon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
