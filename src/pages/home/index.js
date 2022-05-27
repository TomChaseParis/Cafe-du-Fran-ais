import React from 'react';
import { useSelector } from 'react-redux'


const Accueil = () => {
  const { lng, mode } = useSelector((state) => state.app)

  let title
  if (lng === 'FR') {
    title = 'Cours de Français Langue Etrangère à la carte dans le 5ème arrondissement de Paris.'
  } else if (lng === 'IT') {
    title = 'Corsi di francese come lingua straniera nel 5ᵉ arrondissement di Parigi.'
  } else if (lng === 'DE') {
    title = 'Französischunterricht als Fremdsprache à la carte im 5ᵉ Arrondissement von Paris.'
   }else if (lng === 'GB') {
    title = 'A la carte French as a Foreign Language classes in the 5ᵉ arrondissement of Paris.'
  }
  return (
    <div className='home'>
      <h1 className='home__title'>Au Café du Français</h1>
      <p className='home__para'>{title}</p>
      <p>{mode}</p>
    </div>

  );
};

export default Accueil;
