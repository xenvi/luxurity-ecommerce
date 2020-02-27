import React, { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

// image uploads
import dress_landing from "../../images/dress_landing.jpg";

const Landing = styled.section`
  width: 100%;
  height: 95vh;
  background-image: url("${dress_landing}");
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  
`;
const LandingBox = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 1em;
  height: 300px;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  position: absolute;
`;
const LandingText = styled.p`
  text-align: center;
  font-size: 2em;
  color: #fff;
  text-shadow: 0 0 0.4em #000;
  padding: 1.5em 1em;
  z-index: 1;
`;
const LandingButton = styled(Link)`
  position: absolute;
  margin-top: 150px;
  padding: 1em 2em;
  background: #fff;
  color: #333;
  font-weight: bold;
  box-shadow: 0.1em 0.1em 0.5em rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    text-decoration: none;
    box-shadow: 0 0 0.7em #af9e73;
    color: #af9e73 !important;
    transition: all 0.2s ease-in-out;
  }
`;

export class LandingPage extends Component {
  render() {
    return (
      <Landing className="flex">
        <LandingBox />
        <LandingText>
          Intricately woven dresses made perfect for you.
        </LandingText>
        <LandingButton to="/shop">SHOP NOW</LandingButton>
      </Landing>
    );
  }
}

export default LandingPage;
