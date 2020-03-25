import React, { Component } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 100px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.9em;
  text-shadow: 0 0 1em #000;
  z-index: 10;

  transition: 0.3s all ease-in-out;
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
  height: 100px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9em;
  text-shadow: 0 0 1em #000;
  z-index: 10;

  transition: 0.3s all ease-in-out;
`;

const Profile = styled.span`
  color: #fff;

  i {
    font-size: 1.1em;
    padding: 0 5px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Dropdown = styled.li`
  opacity: 0;
  pointer-events: none;
  color: #af9e73;
  padding: 0.5em 1em;
  font-weight: bold;
  text-shadow: none;
  margin-top: 15px;
  position: absolute;
  background: #fff;

  &:hover {
    color: #333;
  }

  transition: all 0.5s ease-in-out;
`;
const Arrow = styled.i`
  position: absolute;
  font-size: 4em;
  top: -10px;
  color: #fff;
`;

class Navbar extends Component {
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
    window.onscroll = function() {
      var nav = document.querySelector("nav");
      if (window.pageYOffset > 75) {
        nav.classList.add("stickynav");
      } else {
        nav.classList.remove("stickynav");
      }
    };
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

  openDropdown() {
    var dropdown = document.getElementsByClassName("dropdown")[0];
    dropdown.classList.toggle("reveal");
  }

  render() {
    const {
      authenticated,
      credentials: { handle }
    } = this.props.user;

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
              {authenticated ? (
                <Profile className="profile" onClick={this.openDropdown}>
                  <i className="fas fa-user"></i> {handle}{" "}
                  <i className="fas fa-angle-down"></i>
                  <Dropdown className="dropdown">
                    <Arrow className="fas fa-caret-up"></Arrow>LOGOUT
                  </Dropdown>
                </Profile>
              ) : (
                <StyledLink to="/login">
                  <i className="fas fa-user"></i> SIGN IN
                </StyledLink>
              )}
            </li>
            <li>
              <i class="fas fa-shopping-cart"></i>
            </li>
            <li>
              <i class="fas fa-search"></i>
            </li>
          </ul>
        </Nav>
      );
    } else {
      return (
        <MobileNav className="navbar">
          <ul className="menu">
            <li>
              <i class="fas fa-bars mobile-icon"></i>
            </li>
          </ul>
          <Brand>LUXURITY</Brand>
          <ul className="menu">
            <li>
              <i class="fas fa-shopping-cart mobile-icon"></i>
            </li>
          </ul>
        </MobileNav>
      );
    }
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, null)(Navbar);
