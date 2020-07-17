import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Pricing.css";


const Pricing = () => {
  const [pricing, setPrincing] = useState(true) 

  const handlechange = e=>{
  setPrincing(prevState=>!prevState)
 //   console.log(e.target.value)
  }

  console.log('pricing',pricing)
  return (
    <div className="Home">
      <Header />
      <div className="container-page pricing">
        <h1>Start collecting and making payments</h1>
        <h3 style={{color: '#1A1F3A'}}>Accessible to any registered business</h3>
        <div className="checkbox_period">
          <h2 style={{fontFamily:'MontserratAlternates-ExBold'}}>pay monthly</h2>
          <div className="check_pay">
            <input type="checkbox" hidden="hidden" id="username" onChange={handlechange} />
            <label className="switch" for="username"></label>
          </div>
          <h2 >pay annually</h2>
        </div>
        <div className="pricing_all_item">
          <div className="pricing_ first_type">
            <div className="pricing__container">
              <label>Starter</label>
              <p className="sup" style={{marginBottom: '10%',marginTop: '17%'}}>
                <span style={{color:'#1A1F3A'}}>FREE</span>
                <br />
                &nbsp;
              </p>
              <input className="sign-btn" type="button" value="Sign up" style={{fontWeight:'500',letterSpacing: '0'}} />
            </div>
            <div className="pricing_01">
              <p>
                <img className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> Limited to 3 users
              </p>
              <p>
                <img className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> Limited to <span style={{fontSize:'0.6vw',position: 'absolute'}}>  XAF </span> <span  style={{marginLeft:'8%'}}> 1.000.000
               /month</span>
              </p>
              <p>
                <img className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} />Sandbox API Tokens
              </p>
              <p>
                <img className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} />community support
              </p>
            </div>
          </div>
          <div className="pricing_">
            <div class="pricing__container">
              <label>Pro</label>
             {pricing ? <p className="sup">
                <sup>XAF</sup> 5.000 / user *
                <br />
                monthly
              </p> : <p className="sup">
                <sup>XAF</sup> 50.000 / user *
                <br />
                annually
              </p>}
              <input className="sign-btn" type="button" value="Sign up"  style={{fontWeight:'500',letterSpacing: '0'}}/>
            </div>
            <div className="pricing_01">
              <p>
                <img className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> Unlimited Users
              </p>
              <p>
                <img className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} />
               Unlimited transactions
              </p>
              <p>
                <img className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> Cash Point
                Services
              </p>
              <p>
                <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> Live API tokens
              </p>
              <p>
                <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> Live API tokens
              </p>
              <p>
                <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> live support
              </p>
              <p class="nb" style={{fontSize: '0.633vw',marginLeft: '7%' }}>
               (*) starting
                from the 4th agent
              </p>
            </div>
          </div>
          <div className="pricing_">
            <div className="pricing__container" style={{border: '3px solid #E77340'}}>
              <label>Standard</label>
              {pricing ? <p className="sup">
                <sup>XAF</sup> 7.500 / user *
                <br />
                monthly
              </p> :  <p className="sup">
                <sup style={{marginRight:'5px'}}>XAF</sup>75.000 / user *
                <br />
                annually
              </p> }
              <input className="sign-btn" type="button" value="Sign up" style={{fontWeight:'500',letterSpacing: '0'}} />
            </div>
            <div className="pricing_01">
              <p>
                <img className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /><span style={{fontFamily:'SFProDisplay-bold'}}> Coupons and
                Promos{" "}</span>
              </p>
              <p className="plus_" style={{fontFamily:'SFProDisplay-bold'}}>
                +
              </p>
              <p>
			  <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")}/> Unlimited Users 
              </p>
              <p>
			  <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")}/> Unlimited
                transactions
              </p>
              <p>
			  <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")}/> Cash Point
                Services
              </p>
              <p>
			  <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")}/> Live API tokens
              </p>
              <p>
                <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> live support
              </p>
              <p class="nb" style={{fontSize: '0.633vw',marginLeft: '7%' }}>
               (*) starting
                from the 4th agent
              </p>
            </div>
          </div>
          <div className="pricing_">
            <div className="pricing__container">
              <label>Advanced</label>
             { pricing ? <p className="sup">
                <sup>XAF</sup> 12.500 / user *
                <br />
                monthly
              </p> : <p className="sup">
                <sup>XAF</sup> 125.000 / user *
                <br />
                annually
              </p> }
              <input className="sign-btn" type="button" value="Sign up" style={{fontWeight:'500',letterSpacing: '0'}} />
            </div>
            <div className="pricing_01">
              <p>
			  <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")}/> <span style={{fontFamily:'SFProDisplay-bold'}}>Coupons and
                Promos{" "}</span>
              </p>
              <p>
			  <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")}/> <span style={{fontFamily:'SFProDisplay-bold'}}> Financial
                Products </span>
              </p>
              <p class="plus_" style={{fontFamily:'SFProDisplay-bold'}}>
                 +
              </p>
              <p>
			  <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")}/> Unlimited Users 
              </p>
              <p>
			  <img className="checkIcon" alt="check_yes icon"  src={require("../images/check_yes.svg")}/> Unlimited
                transactions
              </p>
              <p>
			  <img className="checkIcon" alt="check_yes icon"  src={require("../images/check_yes.svg")}/> Cash Point
                Services
              </p>
              <p>
			  <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")}/> Live API tokens
              </p>
              <p>
                <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> live support
              </p>
              <p class="nb" style={{fontSize: '0.633vw',marginLeft: '7%' }}>
               (*) starting
                from the 4th agent
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
