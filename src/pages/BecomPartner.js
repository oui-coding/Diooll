import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import FeatureList from "../components/FeatureList";
import Footer from "../components/Footer";
import "./Distributor.css";
import { useTranslation } from "react-i18next";

const BecomPartner = () => {
  const { t } = useTranslation(); 

  return (
    <div className="Home">
      <Header />
	  <div class="container-page distributor">
			<div class="block_all_your_shop">
				<div class="block_all_your_shop_text text-intro-contain" style={{marginBottom: '19%'}}>
					<h1>{t('becomPartner.group_1.text_1')}<br />{t('becomPartner.group_1.text_2')}</h1>
					<p>	
          {t('becomPartner.group_1.text_3')}
						<br /> {t('becomPartner.group_1.text_4')} 
					</p>
					<p>
          {t('becomPartner.group_2.text_1')} <br/>
					{t('becomPartner.group_2.text_2')}<br />
					{t('becomPartner.group_2.text_3')}
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
          src={require("../video/partner-ENG.mp4")}
          //  src="video/compo_final-fr2a.mp4"
          type="video/mp4"
          autostart="true"
        />
      </video>
				</div>
			</div>
        <FeatureList component="partner" />
      </div>
	  


      <Footer />
    </div>
  );
};

export default BecomPartner;
