import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import StaticNavbar from "../components/layout/StaticNavbar";
import Footer from "../components/layout/Footer";

import { checkout, removeFromCart } from "../redux/actions/dataActions";

const Container = styled.section`
  width: 100%;
  min-height: 60vh;
  background: #f3f3f3;
  padding: 2em 0;
  align-items: flex-start;
  text-align: center;
  @media only screen and (max-width: 800px) {
    padding-top: 50px;
  }
`;
const Heading = styled.p`
  width: 100%;
  letter-spacing: 1px;
  @media only screen and (max-width: 800px) {
    padding-top: 1em;
  }
`;
const Cart = styled.div`
  width: 800px;
  height: auto;
  background: none;

  @media only screen and (max-width: 800px) {
    width: 90%;
  }
`;
const CartItems = styled.div`
  flex: 59%;
  background: #fff;
  in-height: 200px;
  padding: 2em;
  text-align: left;
`;
const Total = styled.div`
  flex: 39%;
  background: #fff;
  padding: 2em;
  height: 300px;
  margin: 0 0 0 10px;
  text-align: left;
  @media only screen and (max-width: 800px) {
    width: 90%;
    margin: 1em 0 0 0;
  }
`;
const Item = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  position: relative;
`;
const Image = styled.img`
  flex: 20%;
  width: 20%;
  height: 100%;
`;
const Title = styled.h5`
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
const Hr = styled.hr`
  width: 100%;
  background: #f3f3f3;
  padding: 1px;
`;
const Checkout = styled.button`
  background: black;
  color: #fff;
  border-radius: 5px;
  border: none;
  padding: 0.5em 1em;
  width: 100%;
  margin-top: 6em;
`;
const Delete = styled.button`
  border: none;
  background: none;
  color: red;
  float: right;
  font-size: 1.5em;
`;
const Details = styled.div`
  flex: 80%;
  padding: 0 0 0 1em;
`;

export class cart extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate(prevProps) {
    if (this.props.data.cartItems.length !== prevProps.data.cartItems.length) {
      alert("Update");
    }
  }
  subTotal = (item) => {
    var price = item.price;
    var quantity = item.quantity;
    var subTotal = price * quantity;
    var finalSubTotal = parseFloat(Math.round(subTotal * 100) / 100).toFixed(2);
    return finalSubTotal;
  };
  callbackFunction = (cartItems) => {
    var products = cartItems;
    var total = products.reduce(
      (total, i) => (total += i.quantity * i.price),
      0
    );
    var finalTotal = parseFloat(Math.round(total * 100) / 100).toFixed(2);
    return finalTotal;
  };
  checkout = (cartItems) => {
    var products = cartItems.map((item) => {
      item.quantity = 0;
      return item;
    });
    this.props.checkout(products);
  };
  handleRemoveFromCart = (item, cartItems) => {
    var products = cartItems.filter(
      (cartItems) => cartItems.itemId !== item.itemId
    );
    localStorage.setItem("cartItems", JSON.stringify(products));

    this.props.removeFromCart(item);
  };

  render() {
    const { cartItems } = this.props.data;
    return (
      <div>
        <StaticNavbar />
        <Container className="flex flex-wrap">
          <Cart className="flex flex-wrap" style={{ alignItems: "flex-start" }}>
            {cartItems.length === 0 ? (
              <Heading>Your cart is currently empty.</Heading>
            ) : (
              <Fragment>
                <Heading>
                  You have {cartItems.length}{" "}
                  {cartItems.length === 1 ? "item" : "items"} in your cart.
                </Heading>
                <CartItems>
                  <Title>My Cart</Title>
                  <Hr></Hr>
                  {cartItems.map((item) => (
                    <Item>
                      {item.imageUrl && <Image src={item.imageUrl} alt="Product image" />}
                      <Details>
                        <span className="cart-price">${item.price}</span>
                        <Delete
                          onClick={() =>
                            this.handleRemoveFromCart(item, cartItems)
                          }
                        >
                          <i className="fas fa-times"></i>
                        </Delete>
                        <br />
                        <span className="cart-name">{item.title}</span>

                        <br />
                        <span className="quantity">Qty: {item.quantity}</span>
                        <br />
                        <br />
                        <span className="subtotal">
                          Subtotal: ${this.subTotal(item)}
                        </span>
                      </Details>
                    </Item>
                  ))}
                </CartItems>
                <Total>
                  <Title>Order Summary</Title>
                  <Hr></Hr>
                  <p>
                    <span style={{ fontWeight: "bold" }}>TOTAL:</span>{" "}
                    <span style={{ float: "right" }}>
                      ${this.callbackFunction(cartItems)}
                    </span>
                    <Checkout onClick={() => this.checkout(cartItems)}>
                      CHECKOUT
                    </Checkout>
                  </p>
                </Total>
              </Fragment>
            )}
          </Cart>
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapActionsToProps = {
  checkout,
  removeFromCart,
};

export default connect(mapStateToProps, mapActionsToProps)(cart);
