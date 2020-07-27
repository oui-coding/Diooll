import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import FeatureList from "../components/FeatureList";
import Footer from "../components/Footer";
import "./Distributor.css";
import { useTranslation } from "react-i18next";

const Distributor = () => {
  const { t } = useTranslation(); 
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
          src={require("../video/destributor-ENG.mp4")}
          //  src="video/compo_final-fr2a.webm"
          type="video/webm"
          autostart="true"
        /> 
   
      </video>
				</div>
			</div>
        <FeatureList component="distributor" />
      </div>

      <Footer />
    </div>
  );
};

export default Distributor;
