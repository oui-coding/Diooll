import React from "react";
import "./Introduction.css";

const Introduction = () => (
  <div className="block_all_your_shop">
    <div className="block_all_your_shop_text">
      <h1>
        All your shop transactions
        <br />
        with one app
      </h1>
      <p>
        Recharhes & Bills, Cash Deposits & Withdrawals
        <br />
        Consumer Goods Dsitribution
      </p>
      <p>
        Collect payments from customers
        <br />
        Pay back suppliers in seconds
      </p>

      <input className="sign-btn" type="button" value="Try it for free" style={{marginTop:'0.5vw'}}/>
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
        <div className="bouton-aligne">
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
      <video
        className="video_container"
        width="100%"
        id="video_background"
        preload="auto"
        autoplay="true"
        loop
        muted
      >
        <source
          src={require("../video/compo_final-fr2a.mov")}
          //src="video/compo_final-fr2a.mov"
          type="video/mov"
          autostart="true"
        />
        <source
          src={require("../video/compo_final-fr2a.webm")}
          //  src="video/compo_final-fr2a.webm"
          type="video/webm"
          autostart="true"
        />
        <source
          src={require("../video/compo_final-fr2a.mp4")}
          //  src="video/compo_final-fr2a.mp4"
          type="video/mp4"
          autostart="true"
        />
      </video>
    </div>
  </div>
);

export default Introduction;
