import React, { Component } from "react";
import Counter from "./counter";

// hold all items //

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onIncrement,
      onDecrement,
      addToCart
    } = this.props;

    return (
      <div>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onReset={onReset}
            counter={counter}
            addToCart={addToCart}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
