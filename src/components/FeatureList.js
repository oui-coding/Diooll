import React from 'react';
import './FeatureList.css';
import { useTranslation } from "react-i18next";


const FeatureList = ({component}) => {

	const {t} = useTranslation()

const features = [{
	logo:'images/bcPartnerperCent.svg',
	title:`${t('Features.group_1.title_1')}`,
	title1:`${t('Features.group_1.title_2')}`,
	text: `${t('Features.group_1.text_1')}`,
	text1: `${t('Features.group_1.text_2')}`,
},
{
	logo:'images/hand.svg',
	title: `${t('Features.group_2.title_1')}`,
	title1: `${t('Features.group_2.title_2')}`,
	text: `${t('Features.group_2.text_1')}`,
	text1: `${t('Features.group_2.text_2')}`,
},
{
	logo:'images/chech_Pay.svg',
	title: `${t('Features.group_3.title_1')}`,
	title1: `${t('Features.group_3.title_2')}`,
	text: `${t('Features.group_3.text_1')}`,
	text1: `${t('Features.group_3.text_2')}`,
}]

const featuresDist = [{
	logo:'images/bcPartnerperCent.svg',
	title:`${t('Features.group_0.title_1')}`,
	title1:`${t('Features.group_0.title_2')}`,
	text:`${t('Features.group_0.text_1')}`,
	text1:`${t('Features.group_0.text_2')}`,
},
{
	logo:'images/hand.svg',
	title: `${t('Features.group_2.title_1')}`,
	title1: `${t('Features.group_2.title_2')}`,
	text: `${t('Features.group_2.text_1')}`,
	text1: `${t('Features.group_2.text_2')}`,
},
{
	logo:'images/chech_Pay.svg',
	title: `${t('Features.group_3.title_1')}`,
	title1: `${t('Features.group_3.title_2')}`,
	text: `${t('Features.group_3.text_1')}`,
	text1: `${t('Features.group_3.text_2')}`,
}]

const featuresPartner = [{
	logo:'images/bcPartnerperCent.svg',
	title: `${t('Features.group_0.title_1')}`,
	title1: `${t('Features.group_0.title_2')}`,
	text: `${t('Features.group_0.text_1')}`,
	text1: `${t('Features.group_0.text_2')}`,
},
{
	logo:'images/realTimedata.svg',
	title: `${t('Features.group_2.title_1')}`,
	title1: `${t('Features.group_2.title_2')}`,
	text: `${t('Features.group_2.text_1')}`,
	text1: `${t('Features.group_2.text_2')}`,
},
{
	logo:'images/localPromo.svg',
	title: `${t('Features.group_3.title_1')}`,
	title1: `${t('Features.group_3.title_2')}`,
	text: `${t('Features.group_3.text_1')}`,
	text1: `${t('Features.group_3.text_2')}`,
}]


	let featchTab = component === "partner" ? featuresPartner :  component ==="distributor" ? featuresDist : features
	return (
	
	<div className="block_Features">
		 <h1 style={{marginTop: component!=="home" ? '6.532vw' : '2.432VW' }}>{t('Home.features')}</h1>
		 <div className="item-featureCont">
		 {
				 component === "home" ?
					 
				 features.map((home,key)=>{
					 return(
						 
							 <div class="col-idool-3">
									<img src={require('../'+home.logo)} alt="Avatar" style={{width:"25px",height:"25px	"}}/>
							<div class="container">
								<h4 className="featureListCards">{home.title} <br/>
										{home.title1}</h4>
								<p>{home.text} <br/>
										{home.text1}</p>
							</div>
					</div>

						
					 )
					
				 })
				
				 
		: 
		
		component === "distributor" ? 
		featuresDist.map((distributor,key)=>{
			return(
				
					<div class="col-idool-3">
						   <img src={require('../'+distributor.logo)} alt="Avatar" style={{width:"25px",height:"25px	"}}/>
				   <div class="container">
					   <h4 className="featureListCards">{distributor.title} <br/>
							   {distributor.title1}</h4>
					   <p>{distributor.text} <br/>
							   {distributor.text1}</p>
				   </div>
		   </div>

			   
			)
		   
		})
		
		: 

		featuresPartner.map((partner,key)=>{
			return(
				
					<div class="col-idool-3">
						   <img src={require('../'+partner.logo)} alt="Avatar" style={{width:"25px",height:"25px	"}}/>
				   <div class="container">
					   <h4 className="featureListCards">{partner.title} <br/>
							   {partner.title1}</h4>
					   <p>{partner.text} <br/>
							   {partner.text1}</p>
				   </div>
		   </div>

			   
			)
		   
		})
		}
		  </div>
				

	{/*	<div className="item-featureCont">
	{
	featchTab.map((elm,i)=>{
		let str = elm.text1
		//console.log('test',)
		let logo = elm.logo.split('/')
		return<div className="col-idool-3" key={i}>
			
		{logo.length > 0 && logo[0] === "images" ? <img src={require('../'+elm.logo)} alt="payement methods"/> : <span>{elm.logo}</span> }
		<h2 style={{paddingTop:i < 2 ? "4%" : "0"}}>{elm.title}</h2>
		<h2 style={{paddingTop:'0px'}}>{elm.title1}</h2>
		<p>
			{elm.text}
		</p>
		{
		str.includes("balance") ?  
		<p className="col-idool--lastText" style={{marginTop:'9px'}}>

			{elm.text1}
			</p> 
			: 
			str.includes("payment") ? <p className="col-idool--lastText" style={{marginTop:'5px'}}>
			{elm.text1}
			</p>
			:
			<p className="col-idool--lastText" style={{marginTop:'1px'}}>
			{elm.text1}
			</p>
		}
		
	</div>	
	})}
	</div>
	<div className="col-idool-12">
					<a href="https://register.diool.com/#/login/merchant"><input className="sign-btn" type="button" value={component==="distributor" || component==="partner" ?`${t("Features.learnMoreButton")}`:`${t("Features.tryItButton")}`} /></a>
				</div> */}
	</div>
);
}

export default FeatureList