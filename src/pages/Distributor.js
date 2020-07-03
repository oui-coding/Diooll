import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import FeatureList from "../components/FeatureList";
import Footer from "../components/Footer";
import "./Distributor.css";

const Distributor = () => {
  return (
    <div className="Home">
      <Header />
	  <div class="container-page distributor">
			<div class="block_all_your_shop">
				<div class="block_all_your_shop_text text-intro-contain">
					<h1>Manage your resellers<br />and their payments</h1>
					<p>	
						Shops and Agents Management, Cash Advances and Collect
						<br />Promos and Coupons
					</p>
					<p>
						Manage requests from resellers<br/>
						Pay and get paid securely<br />
						Reduce operating costs
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
