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

function App() {
  return (
      <Router>
        {/* NAVBAR */}
        <NavBar />
        <Switch>
          <Route path="/" component={Accueil} exact>
            <Accueil />
          </Route>
          <Route path="/contact" component={Contact} exact>
            <Contact />
          </Route>
          <Route path="/" component={Accueil} exact>
            <Accueil />
          </Route>
          <Route path="/english" component={Home} exact>
            <Home />
          </Route>
          <Route path="/startseite" component={StartSeite} exact>
            <StartSeite />
          </Route>
          <Route path="/accoglienza" component={Accoglienza} exact>
            <Accoglienza />
          </Route>
        </Switch>


        {/* <Switch>
          <Accueil />
        </Switch> */}
      </Router>




  );
}

export default App;
