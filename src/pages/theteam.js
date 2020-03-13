import React, { Component } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import teamHeader from "../images/some-header.jpg";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 70vh;
  background: #f3f3f3;
  padding: 2em 4em;
  text-align: center;
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
  color: #fff;
  text-shadow: 0 0 0.2em #000;
  padding: 1.5em 1em;
  z-index: 1;
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

class theteam extends Component {
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
              <StyledLink to="/about">BUSINESS MODEL</StyledLink>
            </li>
            <li>
              <StyledLink to="/theteam" active="2px solid #333">
                MEET THE TEAM
              </StyledLink>
            </li>
          </ul>
        </SubMenu>
        <Container></Container>
        <Footer />
      </div>
    );
  }
}

export default theteam;
