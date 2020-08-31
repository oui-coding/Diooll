import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Pricing.css";
import { useTranslation } from "react-i18next";


const Pricing = () => {
  const [pricing, setPrincing] = useState(true)
  const { t } = useTranslation()
 
  

  const handlechange = e=>{
  setPrincing(prevState=>!prevState)
 //   console.log(e.target.value)
  }

  return (
    <div className="Home">
      <Header />
      <div className="container-page pricing">
        <h1>{t('pricing.firstText')}</h1>
        <h3 style={{color: '#1A1F3A'}}>{t('pricing.secondTitle')}</h3>
        <div className="checkbox_period" id="checkboxPeriod" >
          <h2 style={{fontFamily:'MontserratAlternates-ExBold'}}>{t('pricing.thirdTitle_1')}</h2>
          <div className="check_pay">
            <input type="checkbox" hidden="hidden" id="username" onChange={handlechange} />
            <label className="switch" for="username"></label>
          </div>
          <h2>{t('pricing.fourthTitle_1')}</h2>
        </div>
        <div className="pricing_all_item">
          <div className="pricing_ first_type">
            <div className="pricing__container">
              <label>{t('pricing.group.text_1')}</label>
              <p className="free-text">
                <span className="free-text" Style={{color:'#1A1F3A'}}>{t('pricing.group.text_2')}</span>
                <br />
                &nbsp;
              </p>
              <button className="sign-btn-pricing" style={{fontWeight:'500',letterSpacing: '0'}} >{t('pricing.group.text_5')}</button>
            </div>
            <div>
              <p>
                <img className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /><span className="pricing_01">{t('pricing.group.text_6')}</span> 
              </p>
              <p>
                <img className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> <span className="pricing_01">{t('pricing.group.text_7')}</span> <span className="span-xaf">  XAF </span> <span className="pricing_01" style={{marginLeft:'8%'}}>1.000.000
  /{t('pricing.group.text_8')}</span>
              </p>
              <p>
                <img className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> <span className="pricing_01">{t('pricing.group.sandbox')}</span>
              </p>
              <p>
                <img className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> <span className="pricing_01">{t('pricing.group.support')}</span>
              </p>
            </div>
          </div>
          <div className="pricing_">
            <div class="pricing__container">
              <label>Pro</label>
             {pricing ? <p className="sup">
                <sup>XAF</sup> 5.000 / {t('pricing.user')} *
                <br />
                {t('pricing.thirdTitle')}
              </p> : <p className="sup">
                <sup>XAF</sup> 50.000 / {t('pricing.user')} *
                <br />
                {t('pricing.fourthTitle_1')}
              </p>}
              <button className="sign-btn-pricing" style={{fontWeight:'500',letterSpacing: '0'}} >{t('pricing.group.text_5')}</button>
            </div>
            <div className="pricing_01">
              <p>
                <img className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> {t('pricing.group.unlimitedUsers')}
              </p>
              <p>
                <img className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} />
               {t('pricing.group.transactionLimite')}
              </p>
              <p>
                <img className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> {t('pricing.group.cashPoint')}
              </p>
              <p>
                <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> {t('pricing.group.liveApi')}
              </p>
              {/* <p>
                <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> Live API tokens
              </p> */}
              <p>
                <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> {t('pricing.group.liveSupport')}
              </p>
              <p class="nb" style={{fontSize: '0.633vw',marginLeft: '7%' }}>
               (*) {t('pricing.group.starting')}
              </p>
            </div>
          </div>
          <div className="pricing_">
            <div className="pricing__container" style={{border: '3px solid #E77340'}}>
  <label>{t('pricing.group.text_3')}</label>
              {pricing ? <p className="sup">
                <sup>XAF</sup> 7.500 / {t('pricing.user')} *
                <br />
                {t('pricing.thirdTitle')}
              </p> :  <p className="sup">
                <sup style={{marginRight:'5px'}}>XAF</sup>75.000 / {t('pricing.user')} *
                <br />
                {t('pricing.fourthTitle')}
              </p> }
  <button className="sign-btn-pricing" style={{fontWeight:'500',letterSpacing: '0'}} >{t('pricing.group.text_5')}</button>
            </div>
            <div className="pricing_01">
              <p>
                <img className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /><span style={{fontFamily:'SFProDisplay-bold'}}> {t('pricing.group.couponPromos')}
               </span>
              </p>
              <p className="plus_" style={{fontFamily:'SFProDisplay-bold'}}>
                +
              </p>
              <p>
			  <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")}/> {t('pricing.group.unlimitedUsers')}
              </p>
              <p>
			  <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")}/> {t('pricing.group.transactionLimite')}
              </p>
              <p>
			  <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")}/> {t('pricing.group.cashPoint')}
              </p>
              <p>
			  <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")}/> {t('pricing.group.liveApi')}
              </p>
              <p>
                <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> {t('pricing.group.liveSupport')}
              </p>
              <p class="nb" style={{fontSize: '0.633vw',marginLeft: '7%' }}>
               (*) {t('pricing.group.starting')}
              </p>
            </div>
          </div>
          <div className="pricing_">
            <div className="pricing__container">
            <label>{t('pricing.group.text_4')}</label>
             { pricing ? <p className="sup">
                <sup>XAF</sup> 12.500 / {t('pricing.user')} *
                <br />
                {t('pricing.thirdTitle')}
              </p> : <p className="sup">
                <sup>XAF</sup> 125.000 / {t('pricing.user')} *
                <br />
                {t('pricing.fourthTitle')}
              </p> }
  <button className="sign-btn-pricing" style={{fontWeight:'500',letterSpacing: '0'}} >{t('pricing.group.text_5')}</button>
            </div>
            <div className="pricing_01">
              <p>
            <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")}/> <span style={{fontFamily:'SFProDisplay-bold'}}>{t('pricing.group.couponPromos')}{" "}</span>
              </p>
              <p>
			  <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")}/> 
        <span style={{fontFamily:'SFProDisplay-bold'}}> {t('pricing.group.financialProduct')} </span>
              </p>
              <p class="plus_" style={{fontFamily:'SFProDisplay-bold'}}>
                 +
              </p>
              <p>
			  <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")}/> {t('pricing.group.unlimitedUsers')}
              </p>
              <p>
			  <img className="checkIcon" alt="check_yes icon"  src={require("../images/check_yes.svg")}/> {t('pricing.group.transactionLimite')}
                
              </p>
              <p>
			  <img className="checkIcon" alt="check_yes icon"  src={require("../images/check_yes.svg")}/> {t('pricing.group.cashPoint')}
                
              </p>
              <p>
			  <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")}/> {t('pricing.group.liveApi')}
              </p>
              <p>
                <img  className="checkIcon" alt="check_yes icon" src={require("../images/check_yes.svg")} /> {t('pricing.group.liveSupport')}
              </p>
              <p class="nb" style={{fontSize: '0.633vw',marginLeft: '7%' }}>
               (*) {t('pricing.group.starting')}
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
