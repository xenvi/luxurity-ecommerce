import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  flex-direction: column;
`;
const Container = styled.section`
  display: flex;
  align-items: top;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  min-height: 300px;
  background: #333;
  color: #fff;
  position: relative;
  padding-top: 3em;
`;
const Header = styled.p`
  color: #af9e73;
  font-weight: bold;
`;
const Links = styled.ul`
  list-style: none;
  font-size: 0.8em;
  line-height: 2em;
  opacity: 0.8;
`;
const Copyright = styled.div`
  width: 100%;
  border-top: 1px solid #444;
  padding: 2em 0;
  text-align: center;
  font-size: 0.8em;
  color: #69614c;
  font-weight: bold;
`;
const Column = styled.div`
  padding: 0.5em 1em;
`;

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <Container className="footer">
          <Column>
            <Header>ABOUT US</Header>
            <Links>
              <li>Our Story</li>
              <li>Business Model</li>
              <li>Find Stores Near You</li>
            </Links>
          </Column>
          <Column>
            <Header>HELP CENTER</Header>
            <Links>
              <li>FAQ's</li>
              <li>Support</li>
              <li>Sizing Guide</li>
              <li>Ordering & Payment</li>
            </Links>
          </Column>
          <Column>
            <Header>LEGAL</Header>
            <Links>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Refund Policy</li>
            </Links>
          </Column>
          <Column>
            <Header>FOLLOW US</Header>
            <Links className="socialicons">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-linkedin-in"></i>
            </Links>
          </Column>
          <Copyright>LUXURITY © 2020</Copyright>
        </Container>
      </Wrapper>
    );
  }
}

export default Footer;
