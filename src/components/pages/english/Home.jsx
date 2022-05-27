import React from 'react';

// Importation des photos
import picheader from '../../../assets/img/header.webp';
import picfrance from '../../../assets/img/france.png'
import picenglish from '../../../assets/img/royaume-uni.png'
import picdeutsch from '../../../assets/img/allemagne.png'
import picitalia from '../../../assets/img/italie.png'

const Home = () => {
  return (
    <div className='home'>
      <h1 className='home__title'>Au Café du Français</h1>
      <img className='home__pic' src={picheader} alt="photo de couverture" />
      <p className='home__para'>Tailor-made French classes in the 5th arrondissement of Paris</p>
      <p>Private lessons - General & Speciality French courses
        DELF/DALF and TCF preparation
        Mini-group French classes (on demand)
     </p>
    </div>
  );
};

export default Home;
