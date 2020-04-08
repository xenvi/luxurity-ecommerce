import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import StaticNavbar from "../components/layout/StaticNavbar";
import Footer from "../components/layout/Footer";
import Counter from "../components/cart/Counter";

import { connect } from "react-redux";
import { getItem } from "../redux/actions/dataActions";

const Container = styled.section`
  min-height: 80vh;
  padding: 3em 0 0 0;
  align-items: flex-start;
  @media only screen and (max-width: 800px) {
    padding-top: 50px;
  }
`;
const Image = styled.img`
  width: auto;
  height: 600px;
  @media only screen and (max-width: 800px) {
    width: 70%;
    height: auto;
    margin-top: 1em;
  }
`;
const Details = styled.div`
  width: 500px;
  height: 700px;
  padding: 1em 2em;
  @media only screen and (max-width: 800px) {
    height: auto;
  }
`;
const Title = styled.p`
  font-size: 1.3em;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
const Price = styled.p`
  color: #333;
  font-weight: bold;
  font-size: 1.5em;
  width: 100%;
  margin-top: -10px;
`;
const Description = styled.p`
  margin-top: 2em;
  color: #333;
  letter-spacing: 2px;
  span {
    font-weight: bold;
    display: block;
    padding-bottom: 0.5em;
    color: #af9e73;
  }
  li {
    list-style: none;
    font-size: 0.8em;
  }
`;
const Size = styled.div``;
const SizeTitle = styled.span`
  font-weight: bold;
  font-size: 0.9em;
  letter-spacing: 2px;
  color: #333;
`;

export class item extends Component {
  state = {
    item: null,
    itemIdParam: null,
  };
  componentDidMount() {
    const itemId = this.props.match.params.itemId;
    this.setState({ itemIdParam: itemId });

    this.props.getItem(itemId);
    axios
      .get(`/items/${itemId}`)
      .then((res) => {
        this.setState({
          item: res.data.items,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const {
      data: {
        item: { title, imageUrl, price, style, color, neckline },
      },
    } = this.props;
    return (
      <div>
        <StaticNavbar />
        <Container className="flex flex-wrap">
          <Image src={imageUrl} alt="Product image"></Image>
          <Details>
            <Title>{title}</Title>
            <Price>${price}</Price>
            <Size>
              <SizeTitle>SIZE:</SizeTitle>
              <form className="size-form">
                <input
                  id="xsmall"
                  type="radio"
                  name="size-form"
                  value="XS"
                ></input>
                <label for="xsmall">XS</label>
                <input
                  id="small"
                  type="radio"
                  name="size-form"
                  value="S"
                ></input>
                <label for="small">S</label>
                <input
                  id="medium"
                  type="radio"
                  name="size-form"
                  value="M"
                ></input>
                <label for="medium">M</label>
                <input
                  id="large"
                  type="radio"
                  name="size-form"
                  value="L"
                ></input>
                <label for="large">L</label>
              </form>
            </Size>
            <Counter items={this.props.data.item}></Counter>
            <Description>
              <span>Description</span>
              <li>
                <b>STYLE</b>: {style}
              </li>
              <li>
                <b>COLOR</b>: {color}
              </li>
              <li>
                <b>NECKLINE</b>: {neckline}
              </li>
            </Description>
          </Details>
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapActionToProps = {
  getItem,
};

export default connect(mapStateToProps, mapActionToProps)(item);
