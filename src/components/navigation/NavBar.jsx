import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/img/logo.webp';

const NavBar = () => {

  /* RESPONSIVE */

  const [isMobile, setIsMobile] = useState(false);


  return (
    <div className='navbar'>
      <img src={Logo} alt="logo" />
      <h3 className='logo-title'>Au café du Français</h3>
      <ul className="navbar__list">
        <Link to="/" className='home'>
          <li>Accueil</li>
        </Link>
        <Link to="/contact" className='contact'>
          <li>Contact</li>
        </Link>
        <Link to="/home" className='home'>
          <li>Français</li>
        </Link>
        <Link to="/homenglish" className='home__english'>
          <li>English</li>
        </Link>
        <Link to="/homedeutsch" className='home__deutsch'>
          <li>Deutsch</li>
        </Link>
        <Link to="/homeitalia" className='home__italia'>
          <li>Italiano</li>
        </Link>
      </ul>
        <button className='mobile-menu-icon'>
          
        </button>
    </div>
  );
};

export default NavBar;
