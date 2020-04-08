import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 490px;
  background: none;
  border-radius: 5px;
  color: #333;
`;

export class ItemSkeleton extends Component {
  render() {
    return <Container>Loading...</Container>;
  }
}

export default ItemSkeleton;
