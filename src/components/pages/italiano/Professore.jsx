import React from 'react';
import TeacherPic from '../../../assets/img/teacher.webp';

const Professore = () => {
  return (
    <div className='teacher'>
     <ul className="teacher__list">
        <li className='teacher__items'>
        <h1 className="teacher__title">Pierre Chazal</h1>
        </li>
       <li className="teacher__items">• Professore di francese per stranieri</li>
       <li className="teacher__items">• 44 anni</li>
       <li className="teacher__items">• Master 2 in Lingua Francese Applicata presso l'Università  Paris IV Sorbona</li>
       <li className="teacher__items">• 15 anni di esperienza nell'insegnamento del francese per stranieri</li>
       <li className="teacher__items">• F for French, Accord Langues, ALIP</li>
       <li className="teacher__items">• Corsi per tutti i livelli, tutti i profili</li>
       <li className="teacher__items">• Metodologia su misura</li>
       <li className="teacher__items">• Materiale didattico (testi, audio, video) completamente fornito</li>
       <li className="teacher__items">
         <button className="teacher__button">Profilo Linkedin</button>
       </li>
     </ul>
     <img src={TeacherPic} alt="teacher picture" className="teacher__picture" />
    </div>
  );
};

export default Professore;
