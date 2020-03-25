import React, { Component } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import businessHeader from "../images/business-header.jpg";

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
  background-image: url(${businessHeader});
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
const Quote = styled.div`
  color: #af9e73;
  font-size: 1.3em;
  line-height: 150%;
  width: 100%;
  padding: 0 4em;
  margin: 2em auto 0 auto;
  @media only screen and (max-width: 1063px) {
    padding: 0 1em;
  }
`;

class businessmodel extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Navbar />
        <Header className="flex">
          <LandingText className="fancytext">Business Model</LandingText>
        </Header>
        <SubMenu className="flex">
          <ul className="menu">
            <li>
              <StyledLink to="/about">OUR STORY</StyledLink>
            </li>
            <li>
              <StyledLink to="/businessmodel" active="2px solid #333">
                BUSINESS MODEL
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/theteam">MEET THE TEAM</StyledLink>
            </li>
          </ul>
        </SubMenu>
        <Container>
          {" "}
          <Content>
            <Quote>
              <span style={{ fontSize: "5em" }}>❝</span>
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum
              fugiat quo voluptas nulla pariatur.
              <br />
              <span
                style={{ fontSize: "5em", float: "right", marginTop: "15px" }}
              >
                ❞
              </span>
            </Quote>
          </Content>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default businessmodel;
