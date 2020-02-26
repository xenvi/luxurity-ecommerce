import React, { Component } from "react";
import styled from "styled-components";

import StaticNavbar from "../components/layout/StaticNavbar";
import Footer from "../components/layout/Footer";

const Container = styled.section`
  width: 100%;
  height: 70vh;
  background: #f3f3f3;
`;

class shop extends Component {
  render() {
    return (
      <div>
        <StaticNavbar />
        <Container></Container>
        <Footer />
      </div>
    );
  }
}

export default shop;
