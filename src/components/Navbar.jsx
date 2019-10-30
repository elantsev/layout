import React from "react";
import styled from "styled-components";

export const Navbar = ({ top, ...rest }) => {
  return (
    <NavWrapper top={top} {...rest}>
      <ul>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#about_me">About Me</a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
      </ul>
      <div className="line"></div>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    list-style: none;
  }

  ul > li > a {
    display: block;
    padding: 10px 20px;
    font-size: 24px;
    letter-spacing: 1px;
    color: #cacaca;
    font-family: ${props => (props.top ? "PT Sans" : "Nexa Light")};
    font-weight: ${props => (props.top ? "400" : "300")};
    text-decoration: none;
    &:hover {
      color: ${props => (props.top ? "#fff" : "#888")};
      font-weight: ${props => (props.top ? "600" : "300")};
    }
    &:active {
      background-color: rgba(128, 128, 128, 0.431);
    }
  }

  .line {
    display: ${props => (props.top ? "none" : "block")};
    width: 90%;
    border-bottom: 1px solid #cacaca;
    margin: auto;
  }
`;
