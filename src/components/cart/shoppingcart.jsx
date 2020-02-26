import React, { Component } from "react";

class ShoppingCartContent extends Component {
  render() {
    if (this.props.totalCounters > 0) {
      return (
        <div className="shoppingCartContainer display">
          <h2 className="cartTitle">YOUR CART</h2>

          {this.props.counters.map(props => {
            if (props.addedToCart > 0)
              return (
                <CartItems
                  key={props.id}
                  name={props.name}
                  price={props.price}
                  imageFront={props.imageFront}
                  quantity={props.value}
                  onDelete={this.props.onDelete}
                  counter={props}
                  callback={this.callbackFunction}
                />
              );
          })}
          <p className="totalcost">Total: ${this.callbackFunction()}</p>
          <button
            className="btn btn-success buy-btn"
            onClick={() => this.props.checkout(this.props.counter)}
          >
            CHECKOUT
          </button>
        </div>
      );
    } else {
      return (
        <div className="shoppingCartContainer display">
          <h2 className="cartTitle">YOUR CART</h2>
          <p className="verifyitems">Your cart is empty.</p>
        </div>
      );
    }
  }

  callbackFunction = () => {
    var products = this.props.counters;
    var total = products.reduce((total, i) => (total += i.value * i.price), 0);
    var finalTotal = parseFloat(Math.round(total * 100) / 100).toFixed(2);
    return finalTotal;
  };
}

class CartItems extends Component {
  render() {
    return (
      <div className="cart-item-container">
        <div className="cart-image">
          <img src={this.props.imageFront} alt="" />
        </div>
        <div className="nextTo">
          <span className="cart-name">{this.props.name}</span>
          <span className="cart-price">${this.props.price}</span>
          <br />
          <span className="quantity">Qty: {this.props.quantity}</span>
          <br />
          <br />
          <span className="subtotal">Subtotal: ${this.subTotal()}</span>
        </div>
        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn btn-danger btn-sm deleteButton"
        >
          x
        </button>
      </div>
    );
  }

  subTotal = () => {
    var price = this.props.price;
    var quantity = this.props.quantity;
    var subTotal = price * quantity;
    var finalSubTotal = parseFloat(Math.round(subTotal * 100) / 100).toFixed(2);
    return finalSubTotal;
  };

  callBack = () => {
    this.props.callback(this.finalSubTotal);
  };
}

export default ShoppingCartContent;
