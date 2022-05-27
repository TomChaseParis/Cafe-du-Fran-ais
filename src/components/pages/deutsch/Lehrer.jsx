import React from 'react';
import TeacherPic from '../../../assets/img/teacher.webp';

const Lehrer = () => {
  return (
    <div className='teacher'>
     <ul className="teacher__list">
        <li className='teacher__items'>
        <h1 className="teacher__title">Pierre Chazal</h1>
        </li>
       <li className="teacher__items">• Französischlehrer</li>
       <li className="teacher__items">• 44 Jahre alt</li>
       <li className="teacher__items">• Absolvent der Universität Paris IV Sorbonne </li>
       <li className="teacher__items">• Masterstudium in Langue Française Appliquée (Französisch als Fremdsprache)</li>
       <li className="teacher__items">• 15 Jahre Erfahrung : F for French, Accord Langues, ALIP</li>
       <li className="teacher__items">• Französischkurse  für alle Sprachniveaus (A1 bis C1 des GERS) und für jede Art von Lerner (Urlauber, Student, Pro, Expat)</li>
       <li className="teacher__items">• Maßgeschneiderte Methode mit bereitgestellten Lehrmaterial (Text, audio, video) </li>
       <li className="teacher__items">
         <button className="teacher__button">Linkedin Profil</button>
       </li>
     </ul>
     <img src={TeacherPic} alt="teacher picture" className="teacher__picture" />
    </div>
  );
};

export default Lehrer;
