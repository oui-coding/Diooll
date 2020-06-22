import React from 'react';
import './FeatureList.css';

const features = [{
	logo:'%',
	title:'Instant Commissions on prepaid products distribution',
	text:'Receive commissions and grow your capital at each executed transactions',
},
{
	logo:'images/static/payement_methods.png',
	title:'Top Ups and Withdrawals with many payement methods',
	text:'Add or withdrax funds using your preferred method of payment',
},
{
	logo:'images/static/arrows.png',
	title:'Quick Payments to suppliers and partners',
	text:'Transfer money to your suppliers and	partners directly from your balance',
}]

const FeatureList = () => (
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
					<input class="sign-btn" type="button" value="Sign in" />
				</div>
	</div>
);

export default FeatureList