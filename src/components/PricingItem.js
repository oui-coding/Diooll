import React from 'react'

import './PricingItem.css'

function PricingItem(){
	return <div class="pricing_ first_type">
	<div class="pricing__container">
		<label>Starter</label>
		<p class="sup"><sup>XAF</sup>0/user<br />&nbsp;</p>
		<input class="sign-btn" type="button" value="Sign up" />
	</div>
	<div class="pricing_01">
		<p><i class="fa fa-check" aria-hidden="true"></i> up to 3  agents or collaborators</p>
		<p><i class="fa fa-check" aria-hidden="true"></i> up to 1.000.000 XAF/month</p>
		<p><i class="fa fa-check" aria-hidden="true"></i> community support</p>
	</div>
</div>
}

export default PricingItem
