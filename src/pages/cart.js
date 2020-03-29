import React, { Component } from "react";
import styled from "styled-components";

import StaticNavbar from "../components/layout/StaticNavbar";
import Footer from "../components/layout/Footer";

const Container = styled.section`
  width: 100%;
  min-height: 60vh;
  background: #f3f3f3;
  padding: 2em 0;
  align-items: flex-start;
  text-align: center;
`;
const Cart = styled.div`
  width: 600px;
  height: auto;
  background: none;
`;

export class cart extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <StaticNavbar />
        <Container className="flex">
          <Cart>Your cart is currently empty.</Cart>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default cart;
