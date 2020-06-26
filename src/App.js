import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Distributor from './pages/Distributor'
import About from './pages/About'
import "./App.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function App() {
  const { t } = useTranslation();

  return (
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Pricing" component={Pricing} />
    <Route exact path="/distributor" component={Distributor} />
     <Route exact path="/about" component={About} />
    {/* <Route exact path="/notre-blog" component={Blog} />
     <Route exact path="/contact" component={Rejoindre} />
     <Route exact path="/CGU" component={CGU} /> */}
  </Switch>
  );
}

export default App;
