import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Importation des photos
import picheader from '../../../assets/img/header.webp';
import picfrance from '../../../assets/img/france.png'
import picenglish from '../../../assets/img/royaume-uni.png'
import picdeutsch from '../../../assets/img/allemagne.png'
import picitalia from '../../../assets/img/italie.png'

import './Accueil.css';


const Accueil = () => {
  return (
    <Router>
    <div className='home'>
      <h1 className='home__title'>Au Café du Français</h1>
{      <img className='home__pic' src={picheader} alt="photo de couverture" />
}      <p className='home__para'>Cours de Français Langue Etrangère à la carte dans le 5ème arrondissement de Paris.</p>
      <ul className="home__country">
        <li className="home__country__item">
          <a href="" className="home__country__links">Français</a>
          <img src={picfrance} alt="drapeau français" />
        </li>
         <li className="home__country__item">
          <a href="" className="home__country__links">English</a>
          <img src={picenglish} alt="drapeau anglais" />
        </li>
        <Link to="/startseite">
         <li className="home__country__item">
          <a href="" className="home__country__links">Deutsch</a>
          <img src={picdeutsch} alt="drapeau allemand" />
        </li>
        </Link>
         <li className="home__country__item">
          <a href="" className="home__country__links">Italiano</a>
          <img src={picitalia} alt="drapeau italien" />
        </li>



     </ul>
    </div>
    </Router>
  );
};

export default Accueil;
