import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './components/navigation/NavBar';

import Contact from './components/pages/contact/Contact';

/* Importation des pages d'accueil */
import Accueil from './components/pages/français/Accueil';
import Home from './components/pages/english/Home';
import StartSeite from './components/pages/deutsch/StartSeite';
import Accoglienza from './components/pages/italiano/Accoglienza';
import Footer from './components/footer/Footer';

/* Pages Teacher */
import Professeur from './components/pages/français/Professeur';
import Teacher from './components/pages/english/Teacher';
import Lehrer from './components/pages/deutsch/Lehrer';
import Professore from './components/pages/italiano/Professore';


/* Pages Prices */
import Tarifs from './components/pages/français/Tarifs';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/" >
          <Accueil />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
