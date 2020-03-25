import React, { Component } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

//images
import aboutHeader from "../images/about-header.jpg";
import aboutImg from "../images/about-img.jpg";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  background: #f3f3f3;
  text-align: center;
  padding: 3em 0;
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
  background-image: url(${aboutHeader});
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
  width: 100%;
  height: auto;
  margin: 3em 0;
`;
const Paragraph = styled.p`
  text-align: left;
  color: #333;
`;

class about extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Navbar />
        <Header className="flex">
          <LandingText className="fancytext">About Us</LandingText>
        </Header>
        <SubMenu className="flex">
          <ul className="menu">
            <li>
              <StyledLink to="/about" active="2px solid #333">
                OUR STORY
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/businessmodel">BUSINESS MODEL</StyledLink>
            </li>
            <li>
              <StyledLink to="/theteam">MEET THE TEAM</StyledLink>
            </li>
          </ul>
        </SubMenu>
        <Container>
          <Content>
            <h1 style={{ fontSize: 50, fontWeight: "bold", width: "100%" }}>
              LUXURITY
            </h1>
            <p style={{ display: "inline", width: "100%" }}>Sausalito, CA</p>
            <Image src={aboutImg}></Image>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>

            <Paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </Paragraph>

            <Paragraph className="fancytext" style={{ fontSize: "6em" }}>
              ~ Luxurity
            </Paragraph>
          </Content>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default about;
