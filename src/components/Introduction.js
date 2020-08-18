import React from "react";
import "./Introduction.css";
import { useTranslation } from "react-i18next";

const Introduction = () => {
  const { t  } = useTranslation();

  function Clip( url ) {

    return (
      <video 
        className="video_container"
        width="100%"
        id="video_background"
        preload="auto"
        autoPlay={true}
        loop
        muted  key={url}>
        <source 
          src={url} 
          type="video/mp4"
          autostart="true"
        />
      </video>
    );
  }

const language = localStorage.getItem('lang')
  return (
    <div className="block_all_your_shop">
    <div className="block_all_your_shop_text">
      <h1>
       {t("introduction.1")}
        <br />
        {t("introduction.2")}
      </h1>
      <p>
      {t("introduction.3")}
        <br />
        {t("introduction.4")}
      </p>
      <p>
      {t("introduction.5")}
        <br />
        {t("introduction.6")}
        <br />
        {t("introduction.7")}
      </p>

      <input className="sign-btn" type="button" value={t("introduction.button")} style={{marginTop:'0.5vw'}}/>
      <div className="btn_app_google">
        <div className="bouton-aligne">
         <a href="https://play.google.com/store/apps/details?id=com.diool"> <input
            type="image"
            src={require("../images/static/app_store.png")}
            name="Submit_app"
            value="Envoyer"
            alt="app_store icon"
          /></a>
        </div>
        <div className="bouton-aligne" style={{marginLeft: '1vw'}}>
          <input
            type="image"
            src={require("../images/static/google_play.png")}
            name="Submit_google"
            value="Envoyer"
            alt="google_play icon"
          />
        </div>
      </div>
    </div>

    <div className="block_all_your_shop_video">
          {
            language === "fr" ? Clip(require("../video/Home/compo final-fr1a.mp4")): Clip(require("../video/Home/compo final-ang1.mp4"))
            
          }

    </div>
  </div>
  )
  
      }

export default Introduction;
