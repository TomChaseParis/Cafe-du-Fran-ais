import React from 'react';
import TeacherPic from '../../../assets/img/teacher.webp';
import './Professeur.css';

const Professeur = () => {
  return (
    <div className='teacher'>
     <ul className="teacher__list">
        <li className='teacher__items'>
        <h1 className="teacher__title">Pierre Chazal</h1>
        </li>
       <li className="teacher__items">• Professeur de Français Langue Etrangère</li>
       <li className="teacher__items">• 44 ans</li>
       <li className="teacher__items">• Master 2 en Langue Française Appliquée à l'université de Paris IV Sorbonne</li>
       <li className="teacher__items">• 15 ans d'expérience dans l'enseignement du FLE</li>
       <li className="teacher__items">• F for French, Accord Langues, ALIP</li>
       <li className="teacher__items">• Cours pour tout niveau, tout profil</li>
       <li className="teacher__items">• Méthodologie adaptée</li>
       <li className="teacher__items">• Matériel pédagogique (texte, audio, vidéo) entièrement fourni</li>
       <li className="teacher__items">
         <button className="teacher__button">Profil complet</button>
       </li>
     </ul>
     <img src={TeacherPic} alt="teacher picture" className="teacher__picture" />
    </div>
  );
};

export default Professeur;
