import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./About.css";

const About = () => {
  return (
    <div className="Home">
      <Header />
	  <div class="container-page template_page_index_ about">
      <div class="block_all_your_shop">
				<div class="block_all_your_shop_text">
					
					<h2 className="about-title">	
					The Diool Manifesto
					</h2>
					
					
				</div>
				
				<div class="block_all_your_shop_video">
					<p>
						Why Diool?
					</p>
					<p>
						It starts with a conviction that technology can help find and scale solutions for our communities need...
					</p>
					<p>
						It fuels our drive to build things that make our lives simpler.
					</p>
					<p>
						We need only three weapons : expertise, creativity and determination.
					</p>
					<p>
						Our age is a fantastic one, with mobile connectivity, and unbridled innovation... 
					</p>
					<p>
						It's become easy to connect with almost anyone anywhere.
					</p>
					<p>
						Mobile payments are such an innovation.
					</p>
					<p>
						It’s become easy to exchange money with almost anyone anywhere. 
					</p>
					<p>
						Our focus is on small merchants, a cornerstone of retail ecosystems
					</p>
					<p class="clr_">Our mission is to improve retail finance for those merchants.</p>
					<p>	
						Their goals, their needs are shaped by cultural habits, influenced by enabling technologies. 
					</p>
					<p>
						For the engineer, the designer, the builder in us, it's a powerful stage.
						One where we can imagine sleeker services and better user experience.
					</p>
					<p>
						To do that, three simple rules guide us:
					</p>
					<p class="clt_0">
						- observe people<br/>
						- learn their needs<br />
						- design better solutions.
					</p>
					<p>
						Without restraint, we strive to enrich or improve.
					</p>
					<p class="clr_">We have only one goal : make their transactions simpler</p>
			</div>
	
			
		</div>	

      <Footer />
	  </div>
    </div>
  );
};

export default About;
