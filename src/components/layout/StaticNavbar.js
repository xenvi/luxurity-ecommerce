import React, { Component } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logoutUser } from "../../redux/actions/userActions";

//firebase
import fire from "../../firebase.js";

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
const StyledLink2 = styled(Link)`
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

  i {
    font-size: 1.2em;
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

const Dropdown = styled.p`
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
const HiddenNav = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #333;
  color: #fff;
  z-index: 10;
  opacity: 0;
  pointer-events: none;
  transition: all 0.5s ease-in-out;
`;
const Close = styled.span`
  position: absolute;
  top: 2em;
  right: 4em;

  i {
    font-size: 1.5em;
  }
  &:hover {
    cursor: pointer;
  }
`;
const Hamburger = styled.i`
  &:hover {
    cursor: pointer;
  }
`;
const Search = styled.input`
  width: 85% !important;
  background: none;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
  padding: 0.25em 0.5em;
`;
const ItemCount = styled.span`
  position: absolute;
  text-align: center;
  font-size: 0.9em;
  font-weight: bold;
  margin-top: -10px;
  margin-left: 3px;
  background: #fff;
  color: #69614c;
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;

class StaticNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
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

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  openDropdown = () => {
    var dropdown = document.getElementsByClassName("dropdown")[0];
    dropdown.classList.toggle("reveal");
  };

  logoutUser = (e) => {
    e.preventDefault();
    fire.auth().signOut();
    this.props.logoutUser();
    window.location.href = "/";
  };

  toggleNav = () => {
    var hiddenNav = document.getElementsByClassName("hiddenNav")[0];
    hiddenNav.classList.toggle("reveal");
  };
  closeNav = () => {
    var hiddenNav = document.getElementsByClassName("hiddenNav")[0];
    hiddenNav.classList.toggle("reveal");
  };

  render() {
    const {
      user: {
        authenticated,
        credentials: { handle },
      },
      data: { cartItems },
    } = this.props;
    const totalItems = cartItems.length;

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
            <StyledLink2 to="/">LUXURITY</StyledLink2>
          </Brand>
          <ul className="menu">
            <li>
              {authenticated ? (
                <Profile className="profile" onClick={this.openDropdown}>
                  <i className="fas fa-user"></i> {handle}{" "}
                  <i className="fas fa-angle-down"></i>
                  <Dropdown className="dropdown" onClick={this.logoutUser}>
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
              <StyledLink2 to="/cart">
                <i className="fas fa-shopping-cart"></i>
                <ItemCount>{totalItems}</ItemCount>
              </StyledLink2>
            </li>
            <li>
              <i className="fas fa-search"></i>
            </li>
          </ul>
        </Nav>
      );
    } else {
      return (
        <div>
          {" "}
          <MobileNav className="navbar">
            <ul className="menu">
              <li>
                <Hamburger
                  onClick={this.toggleNav}
                  className="fas fa-bars mobile-icon"
                ></Hamburger>
              </li>
            </ul>
            <Brand>
              <StyledLink2 to="/">LUXURITY</StyledLink2>
            </Brand>
            <ul className="menu">
              <li>
                <StyledLink2 to="/cart">
                  <i className="fas fa-shopping-cart mobile-icon"></i>
                  <ItemCount>{totalItems}</ItemCount>
                </StyledLink2>
              </li>
            </ul>
          </MobileNav>
          <HiddenNav className="flex flex-wrap hiddenNav">
            {" "}
            <ul className="mobilemenu">
              <Close onClick={this.toggleNav}>
                <i className="fas fa-times"></i>
              </Close>
              <li>
                <StyledLink to="/">HOME</StyledLink>
              </li>
              <li>
                <StyledLink to="/about">ABOUT</StyledLink>
              </li>
              <li>
                <StyledLink to="/shop">SHOP</StyledLink>
              </li>
              <hr style={{ background: "#fff" }}></hr>
              <li>
                {authenticated ? (
                  <Profile className="profile" onClick={this.openDropdown}>
                    <i className="fas fa-user"></i> {handle}{" "}
                    <i className="fas fa-angle-down"></i>
                    <Dropdown className="dropdown" onClick={this.logoutUser}>
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
                <i className="fas fa-search"></i>
                <Search type="text" id="search" name="search"></Search>
              </li>
            </ul>
          </HiddenNav>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data,
});

const mapActionsToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapActionsToProps)(StaticNavbar);
