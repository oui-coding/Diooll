import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useTranslation } from "react-i18next";

const Header = (props) => {
 
  const { t  } = useTranslation();

  
  //
  return(
  <header>
    <div className="logo">
      <Link to="/">
        {" "}
        <img src={require("../images/static/logo_Diool.png")}/>
      </Link>
    </div>
    <nav className="navbar navbar_plane">
      <ul className="navbar-nav">
        <li className="active">
        {/* <Link to="/">Home</Link> */}
          <Link to="/">{t('Header_Menue.home')}</Link>
        </li>
        <li>
        {/* <Link to="/about">About</Link> */}
          <Link to="/about">{t('Header_Menue.about')}</Link>
        </li>
        <li>
        {/* <Link to="/pricing">Pricing</Link> */}
          <Link to="/pricing">{t('Header_Menue.pricing')}</Link>
        </li>
        <li>
          <a href="https://api.diool.com/">API</a>
        </li>
        <li>
        {/* <Link to="/distributor">For Distributors</Link> */}
          <Link to="/distributor">{t('Header_Menue.distributor')}</Link>
        </li> 
        <li>
          {/* <a href="#">Sign in</a> */}
          <Link to="#">{t('Header_Menue.signIn')}</Link>
        </li>
      </ul>
    </nav>

    <div id="diool-mobile-graphic-menu" className="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>
      <ul className="menu__box">
        <li>
          <Link className="menu__item" to="/">
          {t('Header_Menue.home')}
          </Link>
        </li>
        <li>
          <Link className="menu__item" to="/about">
          {t('Header_Menue.about')}
          </Link>
        </li>
        <li>
          <Link className="menu__item" to="/pricing">
          {t('Header_Menue.pricing')}
          </Link>
        </li>
        <li>
          <Link className="menu__item" to="https://api.diool.com/">
            API
          </Link>
        </li>
        <li>
          <Link className="menu__item" to="/distributor">
          {t('Header_Menue.distributor')}
          </Link>
        </li>
        <li>
          <Link className="menu__item" to="#">
          {t('Header_Menue.signIn')}
          </Link>
        </li>
      </ul>
    </div>
  </header>
);}

export default Header;
