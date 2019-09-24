import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import ShoppingCartContent from "./components/shoppingcart";
// item images
import blackhoodie from "./images/blackhoodie.jpg";
import blackhoodieback from "./images/blackhoodieback.jpg";
import windbreaker from "./images/windbreaker.jpg";
import windbreakerback from "./images/windbreakerback.jpg";
import empyre from "./images/empyre.jpg";
import empyreback from "./images/empyreback.jpg";
import swixxz from "./images/swixxz.jpg";
import swixxzback from "./images/swixxzback.jpg";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 0,
        name: "DGK Black hoodie",
        imageFront: blackhoodie,
        imageBack: blackhoodieback,
        price: "27.00",
        addedToCart: 0
      },
      {
        id: 2,
        value: 0,
        name: "Color Block Windbreaker Jacket",
        imageFront: windbreaker,
        imageBack: windbreakerback,
        price: "25.50",
        addedToCart: 0
      },
      {
        id: 3,
        value: 0,
        name: "Empyre Barbed Black T-Shirt",
        imageFront: empyre,
        imageBack: empyreback,
        price: "19.99",
        addedToCart: 0
      },
      {
        id: 4,
        value: 0,
        name: "SWIXXZ Black Lightning Long Sleeve",
        imageFront: swixxz,
        imageBack: swixxzback,
        price: "23.50",
        addedToCart: 0
      }
    ]
  };

  handleIncrement = counter => {
    // clone counters array
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) {
      counters[index].value--;
    }
    this.setState({ counters });
  };

  handleReset = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value = 0;

    this.setState({ counters });
  };

  handleDelete = counter => {
    // const counters = this.state.counters.filter(c => c.id !== counterId);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].addedToCart = 0;
    counters[index].value = 0;
    this.setState({ counters });
  };

  addToCart = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].addedToCart++;
    this.setState({ counters });
  };
  checkout = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      c.addedToCart = 0;
      return c;
    });
    this.setState({ counters });
  };

  // totalCounters={this.state.counters.filter(c => c.value > 0).length}

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.filter(c => c.addedToCart > 0).length
          }
        />
        <ShoppingCartContent
          key={this.state.counters.id}
          totalCounters={
            this.state.counters.filter(c => c.addedToCart > 0).length
          }
          counters={this.state.counters}
          name={this.state.counters.name}
          price={this.state.counters.price}
          imageFront={this.state.counters.imageFront}
          quantity={this.state.counters.value}
          addedToCart={this.state.counters.addedToCart}
          onDelete={this.handleDelete}
          callback={this.callbackFunction}
          checkout={this.checkout}
        />
        <div className="container">
          <Counters
            counters={this.state.counters}
            key={this.state.counters.id}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            addToCart={this.addToCart}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
