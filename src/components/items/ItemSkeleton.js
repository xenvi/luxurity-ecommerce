import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 490px;
  background: #fff;
  border-radius: 5px;
`;

export class ItemSkeleton extends Component {
  render() {
    return <Container></Container>;
  }
}

export default ItemSkeleton;
