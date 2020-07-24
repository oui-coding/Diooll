import React, { useEffect,useState,useMemo,useContext } from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import Home from './pages/Home'
import PreHome from './pages/PreHome'
import Pricing from './pages/Pricing'
import Distributor from './pages/Distributor'
import About from './pages/About'
import BecomPartner from './pages/BecomPartner'
import "./App.css";

import { SharedDataContext } from './useContext';


function App() {
  


  
 
  return (  
  
<>

         
            
    <Router>
    
    <Switch>
    <Route
            exact
            path="/"
            component={() => <Home /> } />  
          
    <Route path="/home"
            component={() => <Home />} />
    <Route exact path="/Pricing" component={Pricing} />
    <Route exact path="/distributor" component={Distributor} />
     <Route exact path="/about" component={About} />
      <Route exact path="/become-a-partner" component={BecomPartner} />
     
  </Switch>

  </Router>
  
 
</>
  )
}

export default App;
