import React, { Component } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import StaticNavbar from "../components/layout/StaticNavbar";
import Footer from "../components/layout/Footer";

//images
import aboutHeader from "../images/about-header.jpg";

const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70vh;
  background: #f3f3f3;
  padding: 2em 4em;
`;
const Header = styled.section`
  width: 100%;
  height: 500px;
  background-image: url(${aboutHeader});
  background-size: cover;
  background-position: center;
`;
const LandingText = styled.p`
  font-size: 3em;
  color: #fff;
  text-shadow: 0 0 0.4em #000;
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
`;

class about extends Component {
  render() {
    return (
      <div>
        <StaticNavbar />
        <Header className="flex">
          <LandingText>ABOUT US</LandingText>
        </Header>
        <SubMenu className="flex">
          <ul className="menu">
            <li>
              <StyledLink to="/">OUR STORY</StyledLink>
            </li>
            <li>
              <StyledLink to="/about">BUSINESS MODEL</StyledLink>
            </li>
            <li>
              <StyledLink to="/shop">MEET THE TEAM</StyledLink>
            </li>
          </ul>
        </SubMenu>
        <Container></Container>
        <Footer />
      </div>
    );
  }
}

export default about;
