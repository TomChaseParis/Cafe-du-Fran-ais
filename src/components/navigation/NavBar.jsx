import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './Navbar.css';
import Logo from '../../assets/img/logo.webp';

// Importation des pages d'accueil


const NavBar = () => {

  /* RESPONSIVE */
  const [isMobile, setIsMobile] = useState(false);

  return (

    <Router>

    <div className='navbar'>
      <img src={Logo} alt="logo" />
      <h3 className='logo-title'>Au café du Français</h3>

      <ul className={isMobile ? "navbar__list__mobile" : "navbar__list"} onClick={() => setIsMobile(false)}>

          {/* ACCUEIL */}
          <li>
          <a to="/" className='home'></a>
          </li>

          {/* CONTACT */}
          <li className='contact'>
            <NavLink to="/contact">Contact</NavLink>
          </li>

          {/* ACCUEIL */}
          <li className='accueil'>
            <a href="">Accueil</a>
          </li>

          {/* HOME */}
          <li className='home'>
            <a href="">English</a>
          </li>

          {/* STARTSEITE */}
          <li className='startseite'>
            <NavLink to="/startseite">Deutsch</NavLink>
          </li>

          {/* ACCOGLIENZA */}
          <li className='accoglienza'>
            <a href="">Italiano</a>
          </li>

      </ul>

        {/* MENU BURGER */}
        <button className='mobile-menu-icon'
        onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>


    </div>

    </Router>
  );
};

export default NavBar;
