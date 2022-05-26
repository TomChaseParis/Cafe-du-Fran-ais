import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <ul className="footer__list">
        <li className="footer__items">Mentions légales</li>
        <li className="footer__items">Politique de confidentialité</li>
        <li className="footer__items">Paramètres des cookies</li>
      </ul>
      <p>Au Café Du Français @ 2022</p>
    </div>
  );
};

export default Footer;
