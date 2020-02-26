import React, { Component } from "react";
import styled from "styled-components";

import StaticNavbar from "../components/layout/StaticNavbar";
import Footer from "../components/layout/Footer";

const Container = styled.section`
  width: 100%;
  height: 70vh;
  background: #f3f3f3;
`;
const Header = styled.section`
  width: 100%;
  height: 500px;
`;

class about extends Component {
  render() {
    return (
      <div>
        <StaticNavbar />
        <Header></Header>
        <Container>about page</Container>
        <Footer />
      </div>
    );
  }
}

export default about;
