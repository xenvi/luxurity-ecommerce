import React, { Component } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  height: 75px;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.9em;
  text-shadow: 0 0 1em #000;
`;
const Brand = styled.h2`
  margin: auto 0;
  color: #fff;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  transition: border-bottom 0.2s ease-in-out;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #fff;
  }

  &:hover {
    border-bottom: 2px solid #fff;
    transition: border-bottom 0.2s ease-in-out;
  }
`;

const MobileNav = styled.nav`
  position: fixed;
  width: 100%;
  height: 50px;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9em;
  text-shadow: 0 0 1em #000;
  z-index: 10;
`;

class StaticNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  render() {
    if (this.state.width >= 800) {
      return (
        <Nav className="navbar">
          <ul className="menu">
            <li>
              <StyledLink to="/">HOME</StyledLink>
            </li>
            <li>
              <StyledLink to="/about">ABOUT</StyledLink>
            </li>
            <li>
              <StyledLink to="/shop">SHOP</StyledLink>
            </li>
          </ul>
          <Brand>
            <StyledLink to="/">LUXURITY</StyledLink>
          </Brand>
          <ul className="menu">
            <li>
              <StyledLink to="/login">
                <i className="fas fa-user"></i> SIGN IN
              </StyledLink>
            </li>
            <li>
              <i className="fas fa-shopping-cart"></i> CART
            </li>
            <li>
              <i className="fas fa-search"></i>
            </li>
          </ul>
        </Nav>
      );
    } else {
      return (
        <MobileNav>
          <ul className="menu">
            <li>
              <i className="fas fa-bars mobile-icon"></i>
            </li>
          </ul>
          <Brand>LUXURITY</Brand>
          <ul className="menu">
            <li>
              <i className="fas fa-shopping-cart mobile-icon"></i>
            </li>
          </ul>
        </MobileNav>
      );
    }
  }
}

export default StaticNavbar;
