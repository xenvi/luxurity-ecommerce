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
  color: #fff;

  li {
    cursor: pointer;

    a {
      color: #fff;
      text-decoration: none;
    }
  }
`;
const Copyright = styled.div`
  width: 100%;
  border-top: 1px solid #444;
  padding: 2em 0;
  text-align: center;
  font-size: 0.8em;
  color: #69614c;
  font-weight: bold;

  a {
    color: #69614c;
  }
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
              <li>
                <a href="https://www.privacypolicies.com/privacy/view/483190e905d1381f196c7168b329379e">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://www.termsfeed.com/terms-conditions/03ca330a47a1f270a0cd0fe6cb26fd12">
                  Terms & Conditions
                </a>
              </li>
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
          <Copyright>
            LUXURITY © 2020 | DEMO IMAGES:{" "}
            <a href="https://unsplash.com/">UNSPLASH</a>
          </Copyright>
        </Container>
      </Wrapper>
    );
  }
}

export default Footer;
