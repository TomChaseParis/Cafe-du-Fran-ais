import React from 'react';
import { useSelector } from 'react-redux'

import AnimatedText from 'react-animated-text-content';

const Accueil = () => {
  const { lng, mode } = useSelector((state) => state.app)

  let title
  if (lng === 'FR') {
    title = 'Cours de Français Langue Etrangère à la carte dans le 5ème arrondissement de Paris.'
  } else if (lng === 'IT') {
    title = 'Corsi di francese come lingua straniera nel 5ᵉ arrondissement di Parigi.'
  } else if (lng === 'DE') {
    title = 'Französischunterricht als Fremdsprache à la carte im 5ᵉ Arrondissement von Paris.'
  } else if (lng === 'GB') {
    title = 'A la carte French as a Foreign Language classes in the 5ᵉ arrondissement of Paris.'
  }
  return (
    <div className='home' style={{padding: '40px' }}>
      <AnimatedText
      style={{fontSize: '48px', fontWeight: '800' , marginBottom: '0'}}
        type="chars" // animate words or chars
        animation={{
          x: '200px',
          y: '-20px',
          scale: 1.1,
          ease: 'ease-in-out',
        }}
        animationType="float"
        interval={0.06}
        duration={0.8}
        tag="p"
        className="animated-paragraph"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="10%"
      >
       Au Café du Français
      </AnimatedText>
      <p style={{ fontSize: '18px' }} className='home__para'>{title}</p>
    </div>

  );
};

export default Accueil;
