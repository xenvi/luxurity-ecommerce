import React, { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

// image uploads
import dress_landing from "../../images/dress_landing.jpg";

const Landing = styled.section`
  width: 100%;
  height: 95vh;
  background-image: url("${dress_landing}");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  padding: 0 5em;
`;
const LandingText = styled.p`
  text-align: left;
  color: #fff;
  text-shadow: 0 0 0.1em #000;
`;
const LandingButton = styled(Link)`
  position: absolute;
  margin-top: 150px;
  padding: 1em 2em;
  background: #af9e73;
  color: #fff;
  font-weight: bold;
  font-size: 1.2em;
  cursor: pointer;
  box-shadow: 0 0 0.7em #af9e73;
  transition: all 0.2s ease-in-out;

  &:hover {
    text-decoration: none;
    background: #333;
    color: #af9e73 !important;
    transition: all 0.2s ease-in-out;
  }
`;

export class LandingPage extends Component {
  render() {
    return (
      <Landing className="flex">
        <LandingText className="fancytext">
          Intricately woven dresses made perfect for you.
        </LandingText>
        <LandingButton to="/shop">SHOP NOW</LandingButton>
      </Landing>
    );
  }
}

export default LandingPage;
