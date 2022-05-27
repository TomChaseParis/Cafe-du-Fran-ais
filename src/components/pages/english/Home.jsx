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

      <ul className="home__country">

        {/* FRANCE */}
        <li className="home__country__item">
          <a href="" className="home__country__links">Français</a>
          <img src={picfrance} alt="drapeau français" />
        </li>

         {/* ENGLISH */}
         <li className="home__country__item">
          <a href="" className="home__country__links">English</a>
          <img src={picenglish} alt="drapeau anglais" />
        </li>

          {/* DEUTSCH */}
         <li className="home__country__item">
          <a href="" className="home__country__links" >Deutsch</a>
          <img src={picdeutsch} alt="drapeau allemand" />
        </li>

          {/* ITALIANOl */}
         <li className="home__country__item">
          <a href="" className="home__country__links">Italiano</a>
          <img src={picitalia} alt="drapeau italien" />
        </li>
     </ul>
    </div>
  );
};

export default Home;
