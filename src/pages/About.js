import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./About.css";

const About = () => {
	const aboutIntro=[{
		firstTitle:'Our Vision',
		secondTitle:'simpler retail financial services using tech, data and financial products',
		text:'Much of our access to financial services is done through technologies adapting slowly to our daily lives This is especially true in Africa where most products are designed far from their users, missing the cultural link Our goal is to bring to life ways of accessing services that reflect more our habits and our culture'
	
	},
	{
		firstTitle:'Our Mission',
		secondTitle:'help merchants accept payments from customers and pay suppliers easily',
		text:'Merchants have always represented the cornerstone of our lives. In the age of mobile money, they’re still left to use 3 or 4 terminals to serve customers and run their business Our current journey aims to offer easier ways of collecting payment, paying suppliers and earning revenue, day after day'
	
	}]
  return (
    <div className="Home">
      <Header />
	  <div class="container-page template_page_index_ about">
      <div class="aboutIntro" >
			{
				aboutIntro.map((elm,i)=>{
					return(
						<div className="aboutIntro-Item" key={i}>
                          <h1 className="aboutIntro-firstTitle">{elm.firstTitle}</h1>
					<h1 className="aboutIntro-secondTitle">{elm.secondTitle}</h1>
					<p className="aboutIntro-text">{elm.text}</p>
						</div>
					)
				})
			}
	
			
		</div>	

      <Footer />
	  </div>
    </div>
  );
};

export default About;
