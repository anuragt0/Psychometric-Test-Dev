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
          {/* <p className="u-about-page-landing-slogan">'We Can, We Will'</p> */}
          <img
            src={aboutBg}
            alt=""
            className="u-about-page-landing-slogan-bg"
          />
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
            The first pillar of Yi believes that leaders aren’t born; they are
            made. It calls upon the students of India to recognize the leader in
            them through various leadership skill development programs, personal
            development programs and nation-building activities.
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
        style={{ backgroundColor: "rgb(255, 255, 255)" }}
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
            The youth carry the baton of building an India that is
            self-sufficient, informed and on the path to development. The second
            pillar of Yi aims to give wings to the transformative power of
            India’s youth through various verticals that delve into present-day
            issues.
          </p>
        </div>
      </div>
      {/* 3 hero */}
      <div
        className="u-about-page-landing-hero"
        style={{ backgroundColor: "#E5E2D3" }}
      >
        <div className="u-about-page-landing-hero-left">
          <p className="u-about-page-landing-hero-heading">
            PARTNER WITH
          </p>
          <p className="u-about-page-landing-hero-subheading">
            The third pillar of Yi aims to nudge the innate leader in today’s
            youth to give rise to a better India of tomorrow. It informs,
            engages and empowers the youth of India through a contributive
            movement of constructive action, collaborative reasoning and
            collective voice.
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