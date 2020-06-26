import React from 'react';
import './Footer.css';


const Footer = () => (
	<footer>
			<div class="padding_footer">
				<div class="footer_blck">
					<h2>
						Diool			
					</h2>
					<label>All rights reserved. Diool 2020</label>
				</div>
				<div class="footer_blck">
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">Blog</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Search</a></li>
						<li><a href="#">Pricing</a></li>
						<li><a href="#">T & Cs</a></li>
						<li><a href="#">For Distributors</a></li>
						<li><a href="#">Privacy</a></li>
						<li><a href="#">Become a partner</a></li>
						<li><a href="#">Community</a></li>
					</ul>
				</div>
				<div class="footer_blck lastfooter">
					<span>Get our newsletter</span>
					<form action="" method="post" >
						 <input type="email" name="email"  value="Enter your email" id="email-footer" />
						 <input className="subscribe-btn" type="submit" value="Subscribe" />
					</form>
				
					<ul className="lastfooter-socialContai">
							<li className="socialMedia-item" >
								<a href="https://twitter.com/DioolApp" target="_blank">
									<img   src={require("../images/twitter.svg")}/>
								</a>
							</li>
							<li className="socialMedia-item">
								<a href="https://www.facebook.com/dioolapp/" target="_blank">
								<img   src={require("../images/facebook.svg")}/>
								</a>
							</li>
							<li className="socialMedia-item">
								<a href="https://www.linkedin.com/showcase/diool-for-merchants/" target="_blank">
								<img   src={require("../images/linkedin.svg")}/>
								</a>
							</li>
						</ul>
						
				</div>
			</div>
		</footer>
);


export default Footer