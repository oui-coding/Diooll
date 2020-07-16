import React, { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import { SharedDataContext } from '../useContext';
import "./Footer.css";

const Footer = (props) => {
  const {t ,changeMyLanguage} = props
  const [valueLang, setValueLang] = useState('en');

  //  const { sharedDataContext, useSharedDataContext } = useContext(SharedDataContext);

  // const [sharedDataContext, useSharedDataContext] = useState({
  //   lang: 'fr',
  // });

  function handlechangeLang(e){
    setValueLang(e.target.value)
    changeMyLanguage(e.target.value)
	// // setValueLang(e.target.value)
  // // useSharedDataContext({
  // //   ...sharedDataContext,
  // //   lang: e.target.value,
  // // })
   };

  console.log('valueLangFooter',valueLang)

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
              value={valueLang}
              onChange={(e)=>handlechangeLang(e)}
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
