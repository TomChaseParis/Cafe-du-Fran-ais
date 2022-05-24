import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './components/navigation/NavBar';
import Contact from './components/pages/contact/Contact';
import Home from './components/pages/home/Home';
import HomeEnglish from './components/pages/home/HomeEnglish';
import HomeDeutsch from './components/pages/home/HomeDeutsch';
import HomeItalia from './components/pages/home/HomeItalia';

function App() {
  return (
      <Router>
        {/* NAVBAR */}
        <NavBar />

        <Switch>
          <Route path="/" component={Home} exact>
            <Home />
          </Route>
          <Route path="/contact" component={Contact} exact>
            <Contact />
          </Route>
          <Route path="/" component={Home} exact>
            <Home />
          </Route>
          <Route path="/homeenglish" component={HomeEnglish} exact>
            <HomeEnglish />
          </Route>
          <Route path="/homedeutsch" component={HomeDeutsch} exact>
            <HomeDeutsch />
          </Route>
          <Route path="/homeitalia" component={HomeItalia} exact>
            <HomeItalia />
          </Route>
        </Switch>
      </Router>


  );
}

export default App;
