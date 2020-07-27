import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useTranslation } from "react-i18next";

const Header = (props) => {
 
  const { t  } = useTranslation();
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

    <div id="diool-mobile-graphic-menu" class="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" for="menu__toggle">
        <span></span>
      </label>
      <ul className="menu__box">
        <li>
          <a className="menu__item" href="/">
          {t('Header_Menue.home')}
          </a>
        </li>
        <li>
          <a className="menu__item" href="/about">
          {t('Header_Menue.about')}
          </a>
        </li>
        <li>
          <a className="menu__item" href="/pricing">
          {t('Header_Menue.pricing')}
          </a>
        </li>
        <li>
          <a className="menu__item" href="https://api.diool.com/">
            API
          </a>
        </li>
        <li>
          <a className="menu__item" href="/distributor">
          {t('Header_Menue.distributor')}
          </a>
        </li>
        <li>
          <a className="menu__item" href="#">
          {t('Header_Menue.signIn')}
          </a>
        </li>
      </ul>
    </div>
  </header>
);}

export default Header;
