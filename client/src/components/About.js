import React from "react";
import aboutImg from '../images/about-img.svg'
import wepLogo from '../images/wep-logo.svg';
import caXpert from '../images/caXpert.svg';
import aboutBg from '../images/aboutBg.png';
import "../css/about.css";

const AboutPage = () => {
  return (
    <div className="u-about-page-outer-div">
      <div className="u-about-page-landing-div">
        <div className="u-about-page-landing-div-left">
          <p className="u-about-page-landing-slogan">We Are <br></br> UDYAM UPLIFT</p>
        </div>
        <div className="u-about-page-landing-div-right">
          <img
            src={aboutBg}
            alt=""
            className="u-about-page-landing-slogan-bg"
          />
          <div className="bg"></div>
        </div>
      </div>
      <div>
      </div>
      {/* 1 hero */}
      <div
        className="u-about-page-landing-hero"
        style={{ backgroundColor: "#71BF44" }}
      >
        <div className="u-about-page-landing-hero-left">
          <p className="u-about-page-landing-hero-heading">ABOUT</p>
          <p className="u-about-page-landing-hero-subheading">
          Discover your compliance mindset and receive personalized 
          strategies to overcome barriers and achieve success. Our 
          comprehensive test and insightful PDF report will empower you to 
          reach new heights in your entrepreneurial journey. Reduce drop-out 
          rates and unlock your true potential with Compliance Self Help Test.
          </p>
        </div>
        <div className="u-about-page-landing-hero-right">
          <img
            src={aboutImg}
            alt="about-1"
            className="u-about-page-hero-img img-1"
          />
        </div>
      </div>
      {/* 2 hero */}
      <div
        className="u-about-page-landing-hero"
        style={{ backgroundColor: "#E5E2D3" }}
      >
        <div className="u-about-page-hero-right">
          <img
            src={wepLogo}
            alt="about-1"
            className="u-about-page-hero-img img-2"
          />
        </div>
        <div className="u-about-page-landing-hero-left">
          <p className="u-about-page-landing-hero-heading">ABOUT WEP</p>
          <p className="u-about-page-landing-hero-subheading">
           WEP has a strong network of partners who provide 
           support in various areas, including community growth, 
           content creation, platform development, and outreach 
           programs and events. With the help of these partners, 
           WEP aims to create a robust entrepreneurship 
           ecosystem for women entrepreneurs
          </p>
        </div>
      </div>
      {/* 3 hero */}
      <div
        className="u-about-page-landing-hero"
        style={{ backgroundColor: "#71BF44" }}
      >
        <div className="u-about-page-landing-hero-left">
          <p className="u-about-page-landing-hero-heading">
            PARTNER WITH
          </p>
          <p className="u-about-page-landing-hero-subheading">
          CAXPERT is an accounting start-up focussed on shifting 
          the book-keeping and tax filing needs of individual.
          focussed on shifting the book-keeping and tax filing 
          needs of individual. focussed on shifting the book-
          keeping and tax filing needs of individual.
          </p>
        </div>
        <div className="u-about-page-hero-right">
          <img
            src={caXpert}
            alt="about-1"
            className="u-about-page-hero-img img-1"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;