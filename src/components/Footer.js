import React, { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import { SharedDataContext } from '../useContext';
import "./Footer.css";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const Footer = (props) => {

  const { t  } = useTranslation();
  const [langage,setLang] = useState('')

  useEffect(() => {
    localStorage.setItem('lang',"en")
  }, []);

  function handleClick(lang) {
    setLang(lang)
      i18next.changeLanguage(lang)
      localStorage.setItem('lang',lang)
    
  }

  return (
    <footer>
      <div class="padding_footer">
        <div class="footer_blck">
          <h2>Diool</h2>
  <label>{t('Footer.copyRight')}</label>
        </div>
        <div class="footer_blck">
          <ul>
            <li>
              {" "}
              <Link to="/">{t('Header_Menue.home')}</Link>
            </li>
            <li>
              {/* <a href="#">Blog</a> */}
              <Link to="#">{t('Footer.blog')}</Link>
              
            </li>
            <li>
              {/* <Link to="/about">About</Link> */}
              <Link to="/about">{t('Footer.about')}</Link>
            </li>
            <li>
              {/* <a href="#">Search</a> */}
              <Link to="#">{t('Footer.search')}</Link>
            </li>
            <li>
              {/* <Link to="/pricing">Pricing</Link> */}
              <Link to="/pricing">{t('Footer.pricing')}</Link>
            </li>
            <li>
              <a href="#">T & Cs</a>
            </li>
            <li>
              {" "}
              {/* <Link to="/distributor">For Distributor</Link> */}
              <Link to="/distributor">{t('Footer.forDistributor')}</Link>
            </li>
            <li>
              {/* <a href="#">Privacy</a> */}
              <Link to="#">{t('Footer.privacy')}</Link>
            </li>
            <li>
              {/* <Link to="/become-a-partner">Become a partner</Link> */}
              <Link to="/become-a-partner">{t('Footer.becomePartner')}</Link>
            </li>
            <li>
              {/* <a href="#">Community</a> */}
              <Link to="#">{t('Footer.community')}</Link>
            </li>
          </ul>
        </div>
        <div class="footer_blck lastfooter">
        
          <span>{t('Footer.newsletter')}</span>
          <form action="" method="post">
            <input
              type="email"
              name="email"
              value= {`${t("Footer.emailPlaceholder")}`}
              id="email-footer"
            />
            
            <input
              className="subscribe-btn"
              type="submit"
              value={`${t('Footer.subscribe')}`}
              style={{ paddingBottom: "9%" }}
            />
          </form>

          <ul className="lastfooter-socialContai">
            <li className="socialMedia-item">
              <a href="https://twitter.com/DioolApp" target="_blank">
                <img className="socialMedia-img" style={{height:"22px"}} src={require("../images/twitter.png")} />
              </a>
            </li>
            <li className="socialMedia-item">
              <a href="https://www.facebook.com/dioolapp/" target="_blank">
                <img className="socialMedia-img" src={require("../images/facebook.png")} />
              </a>
            </li>
            <li className="socialMedia-item">
              <a
                href="https://www.linkedin.com/showcase/diool-for-merchants/"
                target="_blank"
              >
                <img className="socialMedia-img" style={{height:"22px"}} src={require("../images/linkedin.png")} />
              </a>
            </li>
          </ul>
          <div style={{ display: "flex", alignItems: "center" }}>
  <span className="switchlang-span">{t("Footer.switchLanguage")} : </span>

            {/* <label class="labelselectstyle"> */}
            <select
              id="what_shop"
              className="switch-lang-Select"
              value={langage}
              onChange={(e)=>handleClick(e.target.value)}
            >
              
              
              <option className="switch-lang-option" value="en">
                {t('Footer.english')}
              </option>

              <option className="switch-lang-option" value="fr">
              {t('Footer.frensh')}
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
