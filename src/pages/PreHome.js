import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import FeatureList from "../components/FeatureList";
import Footer from '../components/Footer'

import "./PreHome.css";

const PreHome = () => {

	
	 

	
  return (
  <div className="Home">
    <Header />
	<div class="container-page template_page_index_">
			<div class="block_all_your_shop payment" style={{marginTop: '-3vw'}}>
				<h1>The payment app for your shop</h1>
				<div class="customer">
					<div class="customer_block_left">
						<p>Collect payment from customers<br/>
						using any method ?<br/>
						
						</p>
						<Link  to={{ pathname: '/home', query: { payment: 'collection' } }}>
       <input class="sign-btn" type="button" value="Enter"/></Link>
					</div>
					<div class="customer_block_right">
						<p>Earn revenue from reselling<br/>
						prepaid products ?<br/>
						
						</p>
						<Link to={{ pathname: '/home', query: { payment: 'revenue' } }}>	<input class="sign-btn" type="button" value="Enter"/> </Link>
					</div>
				</div>
			</div>

      
			
			<FeatureList />
			</div>
 <Footer />
  </div>)
  }

export default PreHome;
