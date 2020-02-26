import React, { Component } from "react";

// image credits: zumiez //
// display individual items //

class Counter extends Component {
  render() {
    return (
      <div className="item-container">
        <span className="item-name">{this.props.counter.name}</span>
        <span className="price">${this.props.counter.price}</span>
        <div className="image">
          <img
            src={this.props.counter.imageFront}
            alt=""
            onMouseEnter={e =>
              (e.currentTarget.src = this.props.counter.imageBack)
            }
            onMouseLeave={e =>
              (e.currentTarget.src = this.props.counter.imageFront)
            }
          />
        </div>
        <div className="addToCart">
          <span className="quantity">Qty:</span>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-1"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-1"
          >
            -
          </button>
          <button
            onClick={() => this.props.onReset(this.props.counter)}
            className="btn btn-primary btn-sm m-2"
          >
            Reset
          </button>
          <br />
          <button
            onClick={() => this.props.addToCart(this.props.counter)}
            className="addToCartText btn bg-dark text-white"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // if count = 0, add {badge-warning : otherwise, badge-primary} to end of classes
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    // if count = 0, change 0 to 'Zero'
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
