import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import FeatureList from "../components/FeatureList";
import Footer from "../components/Footer";
import "./Distributor.css";

const BecomPartner = () => {
  return (
    <div className="Home">
      <Header />
	  <div class="container-page distributor">
			<div class="block_all_your_shop">
				<div class="block_all_your_shop_text text-intro-contain">
					<h1>Track you channels<br />and market share</h1>
					<p>	
						Reseller Network Management, Promos and Coupons
						<br />Financial Product
					</p>
					<p>
					Add and manage products for your channels<br/>
					Pay commissions and sales discounts<br />
					Analyze distribution activity
					</p>
					<input class="sign-btn" type="button" value="Learn more" />
					
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
        <FeatureList />
      </div>
	  


      <Footer />
    </div>
  );
};

export default BecomPartner;
