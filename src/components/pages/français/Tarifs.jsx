import React from 'react';
import Prices from '../../../assets/img/prices.webp';
import './Tarifs.css';

const Tarifs = () => {
  return (
    <div className='price'>

      {/* PRICES */}
      <ul className="price__list">
        <li className="price__items">
        <h1>Tarifs des cours de Français</h1>
        </li>
        <li className="price__items">Les tarifs des cours sont dégressifs en fonction du nombre de leçons prises.</li>
        <li className="price__items">L'étudiant(e) n'a rien à régler avant le début de la troisième leçon. Il/Elle ne s'engage sur la signature d'un contrat de 5,10, 15 ou 20 leçons que si les deux premiers cours lui ont donné satisfaction, auquel cas ces deux cours sont considérés comme pris.</li>
        <li className="price__items">La durée de chaque leçon est d'une heure trente.</li>
        <li className='price__items'>
          <img className='price__picture' src={Prices} alt="prices" />
        </li>
      </ul>

      {/* CONDITIONS */}
     {/*  <ul className="conditions__list">
        <li className="conditions__items">Les leçons de français doivent être prises dans une limite de 12 mois à compter du premier cours.</li>
        <li className="conditions__items">Une fois le contrat signé, les cours ne sont pas remboursables.
        </li>
      </ul>
 */}
    </div>
  );
};

export default Tarifs;
