import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 490px;
  background: none;
  border-radius: 5px;
`;

const Price = styled.p`
  color: #af9e73;
  width: 100%;
  font-size: 1.2em;
  margin-top: -10px;
`;

const Title = styled.p`
  margin-top: 10px;
  letter-spacing: 1px;
  line-height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
`;

export class Item extends Component {
  render() {
    const {
      item: { price, title, imageUrl, itemId }
    } = this.props;
    return (
      <Container>
        <div style={{ textAlign: "center" }}>
          <Image src={imageUrl} />
        </div>
        <Title>{title}</Title>
        <Price>${price}</Price>
      </Container>
    );
  }
}

export default Item;
