import React, { useState } from "react";
import styled from "styled-components";
import { Navbar } from "./Navbar";

export const MainNavbar = props => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavWrapper {...props} isOpen={isOpen}>
      <p onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "CLOSE MENU" : "∞ MENU"}
      </p>
      {isOpen && <Navbar top />}
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  ul {
    flex-direction: column;
  }

  p {
    margin: 0;
    padding: 10px 20px;
    font-size: 24px;
    letter-spacing: 1px;
    color: #cacaca;
    font-family: "PT Sans";
    font-weight: 700;
    &:hover {
      color: #fff;
      font-weight: 600;
    }
  }
`;
