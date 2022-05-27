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
          <Route path="/home" component={Home} exact>
            <Home />
          </Route>
          <Route path="/startseite" component={StartSeite} exact>
            <StartSeite />
          </Route>
          <Route path="/accoglienza" component={Accoglienza} exact>
            <Accoglienza />
          </Route>
        </Switch>

       {/* PAGES PROFESSEUR */}
       <Router>
          <Route path="/professeur" component={Professeur} exact>
            <Professeur />
          </Route>
          <Route path="/teacher" component={Teacher} exact>
            <Teacher />
          </Route>
          <Route path="/lehrer" component={Lehrer} exact>
            <Lehrer />
          </Route>
          <Route path="/professore" component={Professore} exact>
            <Professore />
          </Route>
        </Router>

        {/* PAGES PRICES */}
        <Router>
          <Route path="/tarifs" component={Tarifs}>
            <Tarifs />
          </Route>
        </Router>

        {/* FOOTER */}
        <Router>
          <Footer />
        </Router>


        {/* <Switch>
          <Accueil />
        </Switch> */}
      </Router>




  );
}

export default App;
