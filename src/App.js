import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import NavBar from './components/navigation/NavBar';

import Contact from './pages/contact';

/* Importation des pages d'accueil */
import Home from './pages/home';



function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/" >
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
