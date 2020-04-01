import React, { Component } from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import {
  incrementCount,
  decrementCount,
  resetCount,
  addToCart
} from "../../redux/actions/dataActions";

const Container = styled.div`
  padding: 0 0 1em 0;
`;
const Title = styled.span`
  font-weight: bold;
  font-size: 0.9em;
  letter-spacing: 2px;
  color: #333;
`;
const Button = styled.button`
  border: none;
  background: none;
  font-size: 1.5em;
  padding: 0 0.75em;
  color: #af9e73;
`;
const AddToCart = styled.button`
  margin: 1em 0 0 0;
  padding: 0.75em 2em;
  color: #fff;
  border: none;
  background: #af9e73;
  letter-spacing: 2px;
  transition: 0.3s all ease-in-out;

  &:hover {
    background: #69614c;
    transition: 0.3s all ease-in-out;
  }
`;
const ResetButton = styled.button`
  font-size: 0.8em;
  padding: 0.5em 1em;
  color: #fff;
  border: none;
  letter-spacing: 2px;
  background: #333;
  transition: 0.3s all ease-in-out;

  &:hover {
    background: #69614c;
    transition: 0.3s all ease-in-out;
  }
`;

export class Counter extends Component {
  handleIncrement = () => {
    this.props.incrementCount();
  };

  handleDecrement = () => {
    if (this.props.data.item.quantity > 0) {
      this.props.decrementCount();
    }
  };

  handleReset = () => {
    this.props.resetCount();
  };

  addToCart = item => {
    if (item.quantity > 0) {
      this.props.addToCart(item);
    }
  };

  render() {
    const { item, loading } = this.props.data;
    return (
      <Container>
        <Title>QUANTITY:</Title>

        <Button onClick={() => this.handleDecrement()}>-</Button>
        <span>{item.quantity}</span>
        <Button onClick={() => this.handleIncrement()}>+</Button>

        <ResetButton onClick={() => this.handleReset()}>RESET</ResetButton>
        <br />
        <AddToCart onClick={() => this.addToCart(item)}>
          {loading ? "ADDING..." : "ADD TO CART"}
        </AddToCart>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
  UI: state.UI
});

const mapActionToProps = {
  incrementCount,
  decrementCount,
  resetCount,
  addToCart
};

export default connect(mapStateToProps, mapActionToProps)(Counter);
