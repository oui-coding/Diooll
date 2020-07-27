import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

import "./About.css";

const About = () => {
	const { t } = useTranslation();

	const aboutIntro=[{

		firstTitle:`${t('About.group_1.firstTitle')}`,
		secondTitle:`${t('About.group_1.secondTitle')}`,
		secondTitle1:`${t('About.group_1.secondTitle1')}`,
		text1:`${t('About.group_1.text1')}`, 
		text2:`${t('About.group_1.text2')}`, 
		text3:`${t('About.group_1.text3')}`
	},
	{
		firstTitle:`${t('About.group_2.firstTitle')}`,
		secondTitle:`${t('About.group_2.secondTitle')}`,
		secondTitle1:`${t('About.group_2.secondTitle1')}`,
		text1:`${t('About.group_2.text1')}`, 
		text2:`${t('About.group_2.text2')}`,
		text3:`${t('About.group_2.text3')}`
	
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
					<h1 className="aboutIntro-secondTitle first-SecondTitle" >{elm.secondTitle}</h1>
					<h1 className="aboutIntro-secondTitle" style={{marginTop:'0'}}>{elm.secondTitle1}</h1>
					<p className="aboutIntro-text">{elm.text1}</p>
					<p className="aboutIntro-text">{elm.text2}</p>
					<p className="aboutIntro-text">{elm.text3}</p>
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
