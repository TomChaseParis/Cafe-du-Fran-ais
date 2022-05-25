import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/img/logo.webp';
// Importation des pages d'accueil

const NavBar = () => {

  /* RESPONSIVE */

  const [isMobile, setIsMobile] = useState(false);


  return (
    <div className='navbar'>
      <img src={Logo} alt="logo" />
      <h3 className='logo-title'>Au café du Français</h3>
      <ul className={isMobile ? "navbar__list__mobile" : "navbar__list"}
      onClick={() => setIsMobile(false)}
      >
        <Link to="/" className='home'>
          <li>
            <a href="/accueil">Accueil</a>
          </li>
        </Link>
        <Link to="/contact" className='contact'>
          <li>
            <a href="">Contact</a>
          </li>
        </Link>
        <Link to="/accueil" className='accueil'>
          <li>Français</li>
        </Link>
        <Link to="/home" className='home'>
          <li>
            <a href="">English</a>
            </li>
        </Link>
        <Link to="/startseite" className='startseite'>
          <li>
            <a href="">Deutsch</a>
          </li>
        </Link>
        <Link to="/accoglienza" className='accoglienza'>
          <li>Italiano</li>
        </Link>
      </ul>
        <button className='mobile-menu-icon'
        onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>
    </div>
  );
};

export default NavBar;
