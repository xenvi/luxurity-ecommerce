import React, { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

// mp4 uploads
import dress_landing from "../../dress.mp4";

const Landing = styled.section`
  width: 100%;
  height: 95vh;
  padding: 0 5em;
  align-content: center;

  @media only screen and (max-width: 600px) {
  background-attachment: scroll;
  }
`;
const LandingText = styled.p`
  width: 100%;
  text-align: center;
  line-height: 100%;
  color: #fff;
  text-shadow: 0 0.05em 0.1em rgba(0,0,0,0.5);
  z-index: 2;
`;
const LandingButton = styled(Link)`
  padding: 1em 2em;
  background: none;
  color: #fff;
  font-weight: bold;
  font-size: 1.1em;
  cursor: pointer;
  border: 2px solid #af9e73;
  transition: all 0.2s ease-in-out;
  z-index: 2;
  letter-spacing: 3px;
  margin-top: 1.5em;
  &:hover {
    text-decoration: none;
    background: rgba(175, 158, 115, 0.3);
    color: #fff;
    box-shadow: 0 0 0.5em #af9e73;
    transition: all 0.2s ease-in-out;
  }
`;

const VideoWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  & > video {
    flex: 1;
    width: 100%;
  }
`;
const Overlay = styled.div`
  z-index: 1;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: #000;
  opacity: 0.5;
`;

export class LandingPage extends Component {
  render() {
    return (
      <Landing className="flex flex-wrap landing_container">
        <VideoWrap>
          <video src={dress_landing} autoplay="" loop={true} muted />
        </VideoWrap>
        <Overlay />
        <LandingText className="fancytext landingtext">
          Intricately woven dresses made perfect for you.
        </LandingText>
        <LandingButton to="/shop">SHOP NOW</LandingButton>
      </Landing>
    );
  }
}

export default LandingPage;
