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
				<div class="block_all_your_shop_text">
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
					<input class="sign-btn" type="button" value="Sign up" />
					
				</div>
				
				<div class="block_all_your_shop_video">
					<img src="http://sandbox2.n-3rd.com/team/nizar/diool/images/block_overview.png" />
				</div>
			</div>
        <FeatureList />
      </div>

      <Footer />
    </div>
  );
};

export default Distributor;
