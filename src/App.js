import React from "react";
//import Chart from './components/chart'
import Home from './pages/Home'
import "./App.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function App() {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
