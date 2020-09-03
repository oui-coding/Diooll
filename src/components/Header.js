import React,{useState} from "react";
import { Link,NavLink } from "react-router-dom";
import "./Header.css";
import { useTranslation } from "react-i18next";

const Header = (props) => {
 
  const { t  } = useTranslation();
  const [active,setActive] = useState()
  const activeStyle = { color: '#ff3333' };
  

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
        <li>
        {/* <Link to="/">Home</Link> */}
        
          <NavLink 
              to="/">{t('Header_Menue.home')}</NavLink>
        </li>
        <li>
        {/* <Link to="/about">About</Link> */}
          <NavLink to="/about" activeClassName="activeClass">{t('Header_Menue.about')}</NavLink>
        </li>
        <li>
        {/* <Link to="/pricing">Pricing</Link> */}
          <NavLink to="/pricing" activeClassName="activeClass">{t('Header_Menue.pricing')}</NavLink>
        </li>
        <li>
          <a href="https://api.diool.com/">API</a>
        </li>
        <li>
        {/* <Link to="/distributor">For Distributors</Link> */}
          <NavLink to="/distributor" activeClassName="activeClass">{t('Header_Menue.distributor')}</NavLink>
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
