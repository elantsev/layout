import React from "react";
import styled from "styled-components";
import { Navbar } from "./Navbar";
import { More } from "./More";
import img from "../img/Jason_Wood.jpg";

const AboutMe = () => {
  return (
    <AboutMeWrapper id="about_me">
      <Navbar className="navbar" />
      <div id="img" />
      <section id="section">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequa
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
        <p className="author">Jason Wood</p>
      </section>
      <More
        className="more"
        text="keep scrolling, there is still more to come."
        href="#next_component"
      />
    </AboutMeWrapper>
  );
};

export default AboutMe;

const AboutMeWrapper = styled.article`
  display: grid;
  grid-template-rows: 100px 1fr 100px;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  grid-template-areas:
    "nav  nav"
    "img  section"
    ".    .";

  height: 100vh;
  position: relative;

  section > h2 {
    text-transform: uppercase;
    font-size: 60px;
    letter-spacing: 6px;
    line-height: 120px;
    color: #202020;
    font-family: "Open Sans";
    font-weight: 400;
    margin-top: 0;
  }
  section > p {
    font-size: 24px;
    letter-spacing: 1px;
    line-height: 50px;
    color: #202020;
    font-family: "Open Sans";
    font-weight: 300;
  }
  section > p.author {
    font-weight: bold;
  }

  .navbar {
    grid-area: nav;
  }

  #img {
    grid-area: img;
    padding-left: 150px;
    background: url(${img}) center no-repeat;
    background-clip: content-box;
  }
  #section {
    grid-area: section;
    padding-right: 150px;
  }

  @media (max-width: 1280px) {
    grid-template-rows: 100px 800px auto 100px;
    grid-template-columns: 1fr;
    grid-template-areas:
      "nav "
      "img"
      "section "
      ". ";
    height: max-content;
    #img,
    #section {
      padding: 0 150px;
    }
  }
  @media (max-width: 1000px) {
    #img,
    #section {
      padding: 0 20px;
    }
  }
  @media (max-width: 525px) {
    grid-template-rows: 800px auto 100px;
    grid-template-columns: 1fr;
    grid-template-areas:
      "img"
      "section "
      ". ";
    height: max-content;
    .navbar,
    .more {
      display: none;
    }
    #section h2 {
      font-size: 30px;
      letter-spacing: 3px;
      line-height: 30px;
      color: #202020;
      font-family: "Open Sans";
      font-weight: 400;
    }
    #section p {
      font-size: 18px;
      letter-spacing: 0px;
      line-height: 40px;
      color: #202020;
      font-family: "Open Sans";
      font-weight: 300;
    }
  }
`;
