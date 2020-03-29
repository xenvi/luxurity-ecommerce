import React, { Component } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { loginUser } from "../redux/actions/userActions";

//images
import googleIcon from "../images/googleicon.png";
import facebookIcon from "../images/facebookIcon.png";

const Container = styled.section`
  width: 100%;
  height: auto;
  padding: 0 1em 2em 1em;
  align-items: flex-start;
`;
const Brand = styled(Link)`
  color: #333;
  width: 100%;
  line-height: 120%;
  transition: 0.2s all ease-in-out;

  :hover {
    text-decoration: none;
    color: #af9e73;
    transition: 0.2s all ease-in-out;
  }
`;

const Login = styled.div`
  background: #fff;
  max-width: 500px;
  height: 600px;
  padding: 1em 2em;
  align-content: space-around;

  @media only screen and (max-width: 500px) {
    padding: 1em;
  }
`;

const Form = styled.form`
  width: 80%;
  text-align: center;

  label {
    float: left;
    font-size: 0.9em;
    font-weight: bold;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 0.5em;
  border: 2px solid #af9e73;
  background: none;
  margin-bottom: 1em;
`;
const Button = styled.button`
  background: #333;
  border: none;
  color: #fff;
  padding: 0.5em 1em;
  margin: 0.5em 0;
  width: 80%;
  transition: 0.2s all ease-in-out;

  :hover {
    background: #af9e73;
    transition: 0.2s all ease-in-out;
  }
`;
const Nav = styled.div`
  width: 100%;
  text-align: center;
`;
const StyledLink = styled(Link)`
  width: 50%;
  padding: 0.75em 1em;
  color: #333;
  font-weight: bold;
  transition: 0.2s all ease-in-out;

  :hover {
    text-decoration: none;
    color: #333 !important;
    transition: 0.2s all ease-in-out;
  }
`;
const Api = styled.div`
  width: 100%;
`;
const Button2 = styled.button`
  background: #fff;
  border: 2px solid #af9e73;
  color: #af9e73;
  padding: 0.8em 1.6em;
  font-weight: bold;
  font-size: 0.9em;
  transition: 0.2s all ease-in-out;

  :hover {
    border: 2px solid #333;
    color: #333;
    transition: 0.2s all ease-in-out;
  }

  img {
    width: 20px;
  }

  @media only screen and (max-width: 500px) {
    padding: 0.5em 1em;
  }
`;
const Error = styled.p`
  color: red;
  font-size: 0.8em;
  text-transform: uppercase;
  margin-top: -10px;
`;

class login extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const {
      UI: { loading }
    } = this.props;
    const { errors } = this.state;
    return (
      <div
        style={{
          background: "#f3f3f3",
          textAlign: "center",
          minHeight: "100vh",
          height: "100%"
        }}
      >
        <Brand to="/" className="fancytext">
          Luxurity
        </Brand>
        <Container className="flex">
          <Login className="flex flex-wrap">
            <Nav className="flex">
              <StyledLink
                style={{ border: "1px solid #999", borderBottom: "none" }}
              >
                Log In
              </StyledLink>
              <StyledLink
                to="/signup"
                style={{ borderBottom: "1px solid #999", color: "#af9e73" }}
              >
                Sign Up
              </StyledLink>
            </Nav>

            <Form onSubmit={this.handleSubmit} noValidate>
              <label for="email">EMAIL:</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              ></Input>
              {errors.email && <Error>{errors.email}</Error>}

              <label for="password">PASSWORD:</label>
              <Input
                id="password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              ></Input>
              {errors.password && <Error>{errors.password}</Error>}
              {errors.general && <Error>{errors.general}</Error>}
              {loading ? (
                <Button onClick={this.handleSubmit}>LOADING ...</Button>
              ) : (
                <Button onClick={this.handleSubmit}>LOG IN</Button>
              )}
            </Form>

            <Api className="flex flex-wrap">
              <p
                style={{ width: "100%", fontSize: "0.9em", fontWeight: "bold" }}
              >
                OR SIGN IN WITH ...
              </p>
              <Button2>
                <img src={googleIcon} alt="Login with Google" />{" "}
                <span style={{ marginLeft: "10px" }}>GOOGLE</span>
              </Button2>
              <Button2 style={{ marginLeft: "5px" }}>
                <img src={facebookIcon} alt="Login with Facebook" />{" "}
                <span style={{ marginLeft: "10px" }}>FACEBOOK</span>
              </Button2>
            </Api>
          </Login>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  loginUser
};

export default connect(mapStateToProps, mapActionsToProps)(login);
