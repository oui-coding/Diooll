import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header>
    <div className="logo">
      <img
        onclick="window.location.href='http://sandbox2.n-3rd.com/team/nizar/diool/landingpage.html;"
        src="http://sandbox2.n-3rd.com/team/nizar/diool/images/static/logo_Diool.png"
      />
    </div>

    <nav className="navbar navbar_plane">
      <ul className="navbar-nav">
        <li className="active">
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <a href="https://api.diool.com/">API</a>
        </li>
        <li>
          <Link to="/distributor">For Distributor</Link>
        </li>
        <li>
          <a href="#">Sign in</a>
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
          <a className="menu__item" href="#">
            home
          </a>
        </li>
        <li>
          <a className="menu__item" href="#">
            about
          </a>
        </li>
        <li>
          <a className="menu__item" href="#">
            pricing
          </a>
        </li>
        <li>
          <a className="menu__item" href="#">
            API
          </a>
        </li>
        <li>
          <a className="menu__item" href="#">
            for distributor
          </a>
        </li>
        <li>
          <a className="menu__item" href="#">
            sign in
          </a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
