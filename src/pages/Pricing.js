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
        <h3>Accessible to any registered business</h3>
        <div className="checkbox_period">
          <h2 style={{fontFamily:'MontserratAlternates-bold'}}>pay monthly</h2>
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
              <p className="sup">
                <sup>XAF</sup>0/user
                <br />
                &nbsp;
              </p>
              <input className="sign-btn" type="button" value="Sign up" />
            </div>
            <div className="pricing_01">
              <p>
                <img className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> up to 3 agents
                or collaborators
              </p>
              <p>
                <img className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> up to 1.000.000
                XAF/month
              </p>
              <p>
                <img className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> community
                support
              </p>
            </div>
          </div>
          <div className="pricing_">
            <div class="pricing__container">
              <label>Pro</label>
             {pricing ? <p className="sup">
                <sup>XAF</sup> 50.000/user
                <br />
                monthly
              </p> : <p className="sup">
                <sup>XAF</sup> 5.000/user
                <br />
                annually
              </p>}
              <input className="sign-btn" type="button" value="Sign up" />
            </div>
            <div className="pricing_01">
              <p>
                <img className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> unlimited
                agents or collaborators
              </p>
              <p>
                <img className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} />
                unlimited transactions
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
              <p class="nb">
               (*) starting
                from the 4th agent
              </p>
            </div>
          </div>
          <div className="pricing_">
            <div className="pricing__container">
              <label>Standard</label>
              {pricing ? <p className="sup">
                <sup>XAF</sup> 7.500/user
                <br />
                monthly
              </p> :  <p className="sup">
                <sup>XAF</sup>75.000/user
                <br />
                annually
              </p> }
              <input className="sign-btn" type="button" value="Sign up" />
            </div>
            <div className="pricing_01">
              <p>
                <img className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> Coupons and
                Promos{" "}
              </p>
              <p className="plus_">
                +
              </p>
              <p>
			  <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")}/> unlimited agents
                or collaborators
              </p>
              <p>
			  <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")}/> unlimited
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
			  <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")}/> Live API tokens
              </p>
            </div>
          </div>
          <div className="pricing_">
            <div className="pricing__container">
              <label>Advanced</label>
             { pricing ? <p className="sup">
                <sup>XAF</sup> 12500/user
                <br />
                monthly
              </p> : <p className="sup">
                <sup>XAF</sup> 125.000/user
                <br />
                annually
              </p> }
              <input className="sign-btn" type="button" value="Sign up" />
            </div>
            <div className="pricing_01">
              <p>
			  <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")}/> Coupons and
                Promos{" "}
              </p>
              <p>
			  <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")}/> Financial
                Products
              </p>
              <p class="plus_">
                 +
              </p>
              <p>
			  <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")}/> unlimited agents
                or collaborators
              </p>
              <p>
			  <img className="checkIcon" alt="check_yes icon"  src={require("../images/check_yes.svg")}/> unlimited
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
			  <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")}/> Live API tokens
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
