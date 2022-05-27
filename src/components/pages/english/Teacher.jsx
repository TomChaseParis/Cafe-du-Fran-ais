import React from 'react';
import TeacherPic from '../../../assets/img/teacher.webp';

const Teacher = () => {
  return (
    <div className='teacher'>
     <ul className="teacher__list">
        <li className='teacher__items'>
        <h1 className="teacher__title">Pierre Chazal</h1>
        </li>
       <li className="teacher__items">• Teacher of French as a foreign language</li>
       <li className="teacher__items">• 44 years old</li>
       <li className="teacher__items">• Master 2 in French & Linguistics, Paris IV Sorbonne University</li>
       <li className="teacher__items">• 15-year experience in teaching French</li>
       <li className="teacher__items">• F for French, Accord Langues, ALIP</li>
       <li className="teacher__items">• Tailor-made lessons for every level, every learning profile, from A1 to C1 of the CEFR</li>
       <li className="teacher__items">• Personalized, flexible approach</li>
       <li className="teacher__items">• Learning resources (text, audio, video) provided</li>
       <li className="teacher__items">
         <button className="teacher__button">Linkedin Profile</button>
       </li>
     </ul>
     <img src={TeacherPic} alt="teacher picture" className="teacher__picture" />
    </div>
  );
};

export default Teacher;
