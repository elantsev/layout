import React from "react";
import styled from "styled-components";
import Double_Arrow from "../img/Double_Arrow.png";

export const More = ({ text, href, className }) => {
  return (
    <MoreWrapper href={href} className={className}>
      <p>{text}</p>
      <img src={Double_Arrow} />
    </MoreWrapper>
  );
};

const MoreWrapper = styled.a`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%);
  text-align: center;
  font-size: 18px;
  text-decoration: none;

  p {
    letter-spacing: 2px;
    color: #cacaca;
    font-family: "Open Sans";
    font-weight: 400;
    text-transform: uppercase;
  }

  img {
    width: 18px;
  }
`;
