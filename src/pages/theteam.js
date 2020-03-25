import React, { Component } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import teamHeader from "../images/some-header.jpg";
import teamOne from "../images/team1.jpg";
import teamTwo from "../images/team2.jpg";
import teamThree from "../images/team3.jpg";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  background: #f3f3f3;
  padding: 2em 4em;
  text-align: center;
  @media only screen and (max-width: 1063px) {
    padding: 2em 0;
  }
`;
const Content = styled.div`
  width: 900px;
  @media only screen and (max-width: 1063px) {
    width: 90%;
  }
`;
const Header = styled.section`
  width: 100%;
  height: 500px;
  background-image: url(${teamHeader});
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
`;
const LandingText = styled.p`
  text-align: center;
  color: #fff;
  text-shadow: 0 0 0.2em #000;
  padding: 1.5em 1em;
  z-index: 1;
  @media only screen and (max-width: 1063px) {
    padding: 0 0.5em;
  }
`;
const SubMenu = styled.div`
  width: 100%;
  height: 5em;
  background: #fff;
  box-shadow: 0 4em 0.2em #333;
  z-index: 20;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  transition: border-bottom 0.2s ease-in-out;
  font-weight: bold;
  padding: 0.5em 0;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #333;
  }
  &:hover {
    border-bottom: 2px solid #333;
    transition: border-bottom 0.2s ease-in-out;
  }

  border-bottom: ${props => props.active || "none"};
`;
const Image = styled.img`
  width: 280px;
  height: 390px;
  float: left;
  margin-bottom: 2em;
  @media only screen and (max-width: 1063px) {
    float: none;
  }
`;
const Bio = styled.div`
  width: 620px;
  height: 390px;
  float: right;
  margin-bottom: 2em;
  padding: 1em 2em;
  text-align: justify;
  @media only screen and (max-width: 1063px) {
    width: 100%;
    padding: 0 0.5em;
  }
`;
const Name = styled.div`
  height: 120px;
  color: #af9e73;
  font-size: 6em;
  @media only screen and (max-width: 1063px) {
    font-size: 5em;
  }
`;

class theteam extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Navbar />
        <Header className="flex">
          <LandingText className="fancytext">Our Team</LandingText>
        </Header>
        <SubMenu className="flex">
          <ul className="menu">
            <li>
              <StyledLink to="/about">OUR STORY</StyledLink>
            </li>
            <li>
              <StyledLink to="/businessmodel">BUSINESS MODEL</StyledLink>
            </li>
            <li>
              <StyledLink to="/theteam" active="2px solid #333">
                MEET THE TEAM
              </StyledLink>
            </li>
          </ul>
        </SubMenu>
        <Container>
          {" "}
          <Content>
            <Image src={teamOne}></Image>
            <Bio>
              <Name className="fancytext">Sharquisha Mika</Name>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Bio>
            <Image src={teamTwo}></Image>
            <Bio style={{ float: "left" }}>
              <Name className="fancytext">Vivian Tran</Name>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Bio>
            <Image src={teamThree}></Image>
            <Bio>
              <Name className="fancytext">Mariam Welster</Name>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Bio>
          </Content>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default theteam;
