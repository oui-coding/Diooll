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
	title:'Top Ups and Withdrawals ',
	title1:'with many payement methods',
	text:'Add or withdraw funds easly',
	text1:'using your preferred method of payment',
},
{
	logo:'images/chech_Pay.svg',
	title:'Quick Payments',
	title1:'to suppliers and partners',
	text:'Transfer money to your suppliers',
	text1:'and	partners directly from your balance',
}]

const featuresDist = [{
	logo:'images/bcPartnerperCent.svg',
	title:'Degressive Pricing',
	title1:'based on transaction volume',
	text:'Reduce your transaction fees',
	text1:'when increasing your payments volume',
},
{
	logo:'images/hand.svg',
	title:'Top Ups and Withdrawals ',
	title1:'with many payement methods',
	text:'Add or withdraw funds easly',
	text1:'using your preferred method of payment',
},
{
	logo:'images/chech_Pay.svg',
	title:'Quick Payments',
	title1:'to suppliers and partners',
	text:'Transfer money to your suppliers',
	text1:'and	partners directly from your balance',
}]

const featuresPartner = [{
	logo:'images/bcPartnerperCent.svg',
	title:'Degressive Pricing',
	title1:'based on transaction volume',
	text:'Receive commissions instantly',
	text1:'and grow your capital at each transaction',
},
{
	logo:'images/realTimedata.svg',
	title:'Realtime Data',
	title1:'on your products distribution',
	text:'Review resellers activity',
	text1:'based on location or other criteria',
},
{
	logo:'images/localPromo.svg',
	title:'Localized Promos',
	title1:'to your customer base',
	text:'Boost product performance',
	text1:'using targeted props and coupons',
}]


	let featchTab = component==="partner" ? featuresPartner :  component==="distributor" ? featuresDist : features
	return (
	<div class="block_Features">
		<h1 style={{marginTop: component!=="home" ? '6.532vw' : '2.432VW' }}>{t('Home.features')}</h1>
		<div className="item-featureCont">
	{featchTab.map((elm,i)=>{
		let logo = elm.logo.split('/')
		return <div className="col-idool-3" >
		{logo.length>0 && logo[0]==="images" ? <img src={require('../'+elm.logo)} alt="payement methods" 	/> : <span>{elm.logo}</span> }
	<h2 style={{paddingTop:i<2 ? '4%':'0'}}>{elm.title}</h2>
	<h2 style={{paddingTop:'0px'}}>{elm.title1}</h2>
		<p>
			{elm.text}
		</p>
		<p className="col-idool--lastText" style={{marginTop:'0'}}>
			{elm.text1}
		</p>
	</div>	
	})}
	</div>
	<div class="col-idool-12">
					<a href="https://register.diool.com/#/login/merchant"><input class="sign-btn" type="button" value={component==="distributor" || component==="partner" ?"Learn More":"Try it"} /></a>
				</div>
	</div>
);
}

export default FeatureList