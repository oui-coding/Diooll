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
				<div class="footer_blck">
					<span>Get our newsletter</span>
					<form action="" method="post" >
						 <input type="email" name="email"  value="Enter your email" id="email-footer" />
						 <input type="submit" value="Suscribe" />
					</form>
					<div class="rs_">
						<ul>
							<li>
								<a href="" target="_blank">
									<i class="fa fa-twitter" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="" target="_blank">
									<i class="fa fa-facebook-official" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="" target="_blank">
									<i class="fa fa-linkedin-square" aria-hidden="true"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
);


export default Footer