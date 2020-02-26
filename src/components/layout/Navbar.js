import React, { Component } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 75px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.9em;
  margin-top: 25px;
  text-shadow: 0 0 1em #000;
  z-index: 10;
`;
const Brand = styled.h1`
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

class Navbar extends Component {
  render() {
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
        <Brand>LUXURITY</Brand>
        <ul className="menu">
          <li>
            <i class="fas fa-user"></i> SIGN IN
          </li>
          <li>
            <i class="fas fa-shopping-cart"></i> CART
          </li>
          <li>
            <i class="fas fa-search"></i>
          </li>
        </ul>
      </Nav>
    );
  }
}

export default Navbar;
