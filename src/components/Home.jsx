import React from "react";
import styled from "styled-components";
import bg from "../img/Background.jpg";
import { MainNavbar } from "./MainNavbar";
import { More } from "./More";
import { Navbar } from "./Navbar";

const Home = () => {
  return (
    <HomeWrapper>
      <MainNavbar className="little-navbar" />
      <Navbar top className="navbar" />
      <More text="scroll down to see more" href="#about_me" className="more" />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.article`
  background: url(${bg}) center/cover no-repeat;
  height: 100vh;
  position: relative;
  .little-navbar {
    display: none;
  }

  @media (max-width: 1000px) {
    height: 80vh;

    .more {
      display: none;
    }
  }
  @media (max-width: 525px) {
    height: 40vh;
    .little-navbar {
      display: block;
    }
    .navbar,
    .more {
      display: none;
    }
  }
`;
