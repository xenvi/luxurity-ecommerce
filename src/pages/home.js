import React, { Component } from "react";
import Navbar from "../components/layout/Navbar";
import LandingPage from "../components/layout/LandingPage";
import Footer from "../components/layout/Footer";

import styled from "styled-components";

// images
import featured_white from "../images/featured-white.jpg";
import featured_peach from "../images/featured-peach.jpg";
import featured_purple from "../images/featured-purple.jpg";

const About = styled.section`
  margin-top: 5vh;
  width: 100%;
  height: 350px;
  background: #333;
  color: #fff;
`;
const VerticalLine = styled.div`
  height: 80%;
  width: 0.2em;
  background: #444;
`;

const Featured = styled.section`
  margin: 5vh 0;
  width: 100%;
  flex-wrap: wrap;
`;
const Image = styled.img`
  width: 23em;
  height: 35em;
  margin: 0 0.5em;
`;
const Title = styled.p`
  width: 100%;
  text-align: center;
  font-size: 2.5em;
  font-weight: bold;
`;
const Info = styled.section`
  margin-top: 10vh;
  width: 100%;
  height: 600px;
  flex-wrap: wrap;
  background: #f3f3f3;
`;

class home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <LandingPage />
        <About className="flex about_section">
          <p style={{ fontSize: "2em", color: "#af9e73" }}>LUXURITY CO.</p>
          <VerticalLine></VerticalLine>
          <p style={{ maxWidth: "35em" }}>
            We are re-introducing the beauty of regality in fashion. Using only
            the finest materials, our dresses will bring you comfort and
            confidence anywhere, anytime.
          </p>
        </About>
        <Featured className="flex">
          <Title>FEATURED</Title>
          <Image src={featured_white}></Image>
          <Image src={featured_peach}></Image>
          <Image src={featured_purple}></Image>
        </Featured>
        <Info className="flex"></Info>
        <Footer />
      </div>
    );
  }
}

export default home;
