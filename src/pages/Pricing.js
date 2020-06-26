import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="Home">
      <Header />
      <div class="container-page pricing">
        <h1>Start collecting and making payments</h1>
        <h3>Accessible to any registered business</h3>
        <div class="checkbox_period">
          <h2>pay monthly</h2>
          <div class="check_pay">
            <input type="checkbox" hidden="hidden" id="username" />
            <label class="switch" for="username"></label>
          </div>
          <h2>pay annually</h2>
        </div>
        <div class="pricing_all_item">
          <div class="pricing_ first_type">
            <div class="pricing__container">
              <label>Starter</label>
              <p class="sup">
                <sup>XAF</sup>0/user
                <br />
                &nbsp;
              </p>
              <input class="sign-btn" type="button" value="Sign up" />
            </div>
            <div class="pricing_01">
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
          <div class="pricing_">
            <div class="pricing__container">
              <label>Pro</label>
              <p class="sup">
                <sup>XAF</sup> 5.000/user
                <br />
                monthly
              </p>
              <input class="sign-btn" type="button" value="Sign up" />
            </div>
            <div class="pricing_01">
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
          <div class="pricing_">
            <div class="pricing__container">
              <label>Standard</label>
              <p class="sup">
                <sup>XAF</sup> 7.500/user
                <br />
                monthly
              </p>
              <input class="sign-btn" type="button" value="Sign up" />
            </div>
            <div class="pricing_01">
              <p>
                <img className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> Coupons and
                Promos{" "}
              </p>
              <p class="plus_">
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
          <div class="pricing_">
            <div class="pricing__container">
              <label>Advanced</label>
              <p class="sup">
                <sup>XAF</sup> 12500/user
                <br />
                monthly
              </p>
              <input class="sign-btn" type="button" value="Sign up" />
            </div>
            <div class="pricing_01">
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
