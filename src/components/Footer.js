import React, { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import { SharedDataContext } from '../useContext';
import "./Footer.css";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const Footer = (props) => {

  const { t  } = useTranslation();
  const [langage,setLang] = useState('')

  // const { sharedDataContext,useSharedDataContext} = useState({lang:'en'});

  // const { sharedDataContext } = useContext(SharedDataContext);

  function handleClick(lang) {
    setLang(lang)
      i18next.changeLanguage(lang)
    
  }

  return (
    <footer>
      <div class="padding_footer">
        <div class="footer_blck">
          <h2>Diool</h2>
          <label>All rights reserved. Diool 2020</label>
        </div>
        <div class="footer_blck">
          <ul>
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="#">Search</a>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <a href="#">T & Cs</a>
            </li>
            <li>
              {" "}
              <Link to="/distributor">For Distributor</Link>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <Link to="/become-a-partner">Become a partner</Link>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </div>
        <div class="footer_blck lastfooter">
          <span>Get our newsletter</span>
          <form action="" method="post">
            <input
              type="email"
              name="email"
              value="Enter your email"
              id="email-footer"
            />
            <input
              className="subscribe-btn"
              type="submit"
              value="Subscribe"
              style={{ paddingBottom: "9%" }}
            />
          </form>

          <ul className="lastfooter-socialContai">
            <li className="socialMedia-item">
              <a href="https://twitter.com/DioolApp" target="_blank">
                <img className="socialMedia-img" src={require("../images/twitter.svg")} />
              </a>
            </li>
            <li className="socialMedia-item">
              <a href="https://www.facebook.com/dioolapp/" target="_blank">
                <img className="socialMedia-img" src={require("../images/facebook.svg")} />
              </a>
            </li>
            <li className="socialMedia-item">
              <a
                href="https://www.linkedin.com/showcase/diool-for-merchants/"
                target="_blank"
              >
                <img className="socialMedia-img" src={require("../images/linkedin.svg")} />
              </a>
            </li>
          </ul>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className="switchlang-span">Switch language to:</span>

            {/* <label class="labelselectstyle"> */}
            <select
              id="what_shop"
              className="switch-lang-Select"
              value={langage}
              onChange={(e)=>handleClick(e.target.value)}
            >
              
              
              <option className="switch-lang-option" value="en">
                Anglais
              </option>
              
              <option className="switch-lang-option" value="fr">
                Français
              </option>
            </select>
            
          </div>
        </div>
        {/* <img className="messenger-icon"  src={require("../images/static/messager.png")} alt="messenger-icon"/> */}
      </div>
    </footer>
  );
};

export default Footer;
