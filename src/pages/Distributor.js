import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import FeatureList from "../components/FeatureList";
import Footer from "../components/Footer";
import "./Distributor.css";
import { useTranslation } from "react-i18next";

const Distributor = () => {
  const { t } = useTranslation(); 


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
    <div className="Home">
      <Header />
	  <div class="container-page distributor">
			<div class="block_all_your_shop">
				<div class="block_all_your_shop_text text-intro-contain" style={{marginBottom: '10.5%'}}>
					<h1>{t('distibutors.text_1')}<br />{t('distibutors.text_2')}</h1>
					<p>	
						{t('distibutors.gestionBoutique')}
						<br />{t('distibutors.text_4')}
					</p>
					<p>
						{t('distibutors.manage')}<br/>
						{t('distibutors.pay')}<br />
						{t('distibutors.reduiser')} 
					</p>
					<input class="sign-btn" type="button" value={`${t("Features.learnMoreButton")}`} />
					
				</div>
				
				<div class="block_all_your_shop_video dist-vd-contain">
        {
            language === "fr" ? Clip(require("../video/Distributors/04-Manage-motion-FR-110620.mp4")): Clip(require("../video/Distributors/04-Manage-motion-ENG-110620.mp4"))
            
          }
               

                 
				</div>
			</div>
        <FeatureList component="distributor" />
      </div>

      <Footer />
    </div>
  );
};

export default Distributor;
