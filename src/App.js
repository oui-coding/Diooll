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
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { SharedDataContext } from './useContext';


function App() {
  const { t } = useTranslation();
  const [langage,setLang] = useState('')

  // const { sharedDataContext,useSharedDataContext} = useState({lang:'en'});

  // const { sharedDataContext } = useContext(SharedDataContext);


  function handleClick(lang) {
      
    setLang(lang)
    //  i18next.changeLanguage(lang)
    
  }

  useEffect(()=>{
    setLang('en')
    // console.log('sharedDataContext',sharedDataContext)
   
  },[])

  
  useEffect(()=>{
   
  console.log('satrt',langage)

    // console.log('sharedDataContext',sharedDataContext)
   
  },[langage])

  
 

 
  return (    
    <Router>

    <Switch>
    <Route
            exact
            path="/"
            component={() => <Home t={t} changeMyLanguage={lang=>handleClick(lang)} /> } />  
          
    <Route path="/home"
            component={() => <Home t={t} changeMyLanguage={lang=>handleClick(lang)}  />} />
    <Route exact path="/Pricing" component={Pricing} />
    <Route exact path="/distributor" component={Distributor} />
     <Route exact path="/about" component={About} />
      <Route exact path="/become-a-partner" component={BecomPartner} />
     
  </Switch>

  </Router> 
  );
}

export default App;
