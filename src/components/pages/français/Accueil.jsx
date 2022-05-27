import React from 'react';

// Importation des photos
import picheader from '../../../assets/img/header.webp';
import picfrance from '../../../assets/img/france.png'
import picenglish from '../../../assets/img/royaume-uni.png'
import picdeutsch from '../../../assets/img/allemagne.png'
import picitalia from '../../../assets/img/italie.png'

import './Accueil.css';


const Accueil = () => {
  return (
    <div className='home'>
      <h1 className='home__title'>Au Café du Français</h1>
      <img className='home__pic' src={picheader} alt="photo de couverture" />
      <p className='home__para'>Cours de Français Langue Etrangère à la carte dans le 5ème arrondissement de Paris.</p>

      
    </div>

  );
};

export default Accueil;
