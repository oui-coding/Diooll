import React from 'react';
import './FeatureList.css';

const features = [{
	logo:'images/perCent.svg',
	title:'Instant Commissions on prepaid products distribution',
	text:'Receive commissions and grow your capital at each executed transactions',
},
{
	logo:'images/hand.svg',
	title:'Top Ups and Withdrawals with many payement methods',
	text:'Add or withdrax funds using your preferred method of payment',
},
{
	logo:'images/chech_Pay.svg',
	title:'Quick Payments to suppliers and partners',
	text:'Transfer money to your suppliers and	partners directly from your balance',
}]

const FeatureList = ({component}) => (
	<div class="block_Features">
		<h1>Features</h1>
		<div className="item-featureCont">
	{features.map((elm,i)=>{
		let logo = elm.logo.split('/')
		return <div className="col-idool-3">
		{logo.length>0 && logo[0]==="images" ? <img src={require('../'+elm.logo)} alt="payement methods" 	/> : <span>{elm.logo}</span> }
	<h2>{elm.title}</h2>
		<p>
			{elm.text}
		</p>
	</div>	
	})}
	</div>
	<div class="col-idool-12">
					<a href="https://register.diool.com/#/login/merchant"><input class="sign-btn" type="button" value={component==="distributor" ?"Learn More":"Sign in"} /></a>
				</div>
	</div>
);

export default FeatureList