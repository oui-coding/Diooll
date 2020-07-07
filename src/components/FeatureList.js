import React from 'react';
import './FeatureList.css';

const features = [{
	logo:'images/bcPartnerperCent.svg',
	title:'Instant Commissions on',
	title1:'prepaid products distribution',
	text:'Receive commissions instantly	and grow your capital at each transaction',
},
{
	logo:'images/hand.svg',
	title:'Top Ups and Withdrawals ',
	title1:'with many payement methods',
	text:'Add or withdraw funds easly using your preferred method of payment',
},
{
	logo:'images/chech_Pay.svg',
	title:'Quick Payments',
	title1:'to suppliers and partners',
	text:'Transfer money to your suppliers and	partners directly from your balance',
}]

const featuresDist = [{
	logo:'images/bcPartnerperCent.svg',
	title:'Degressive Pricing',
	title1:'based on transaction volume',
	text:'Receive commissions instantly	and grow your capital at each transaction',
},
{
	logo:'images/hand.svg',
	title:'Top Ups and Withdrawals ',
	title1:'with many payement methods',
	text:'Add or withdraw funds easly using your preferred method of payment',
},
{
	logo:'images/chech_Pay.svg',
	title:'Quick Payments',
	title1:'to suppliers and partners',
	text:'Transfer money to your suppliers and	partners directly from your balance',
}]

const featuresPartner = [{
	logo:'images/bcPartnerperCent.svg',
	title:'Degressive Pricing',
	title1:'based on transaction volume',
	text:'Receive commissions instantly	and grow your capital at each transaction',
},
{
	logo:'images/realTimedata.svg',
	title:'Realtime Data',
	title1:'on your products distribution',
	text:'Review resellers activity based on location or other criteria',
},
{
	logo:'images/localPromo.svg',
	title:'Localized Promos',
	title1:'to your customer base',
	text:'Boost product performance using targeted props and coupons',
}]

const FeatureList = ({component}) => {
	let featchTab = component==="partner" ? featuresPartner :  component==="distributor" ? featuresDist : features
	return (
	<div class="block_Features">
		<h1>Features</h1>
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