import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Pages
import home from "./pages/home";
import shop from "./pages/shop";
import about from "./pages/about";
import theteam from "./pages/theteam";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={home}></Route>
            <Route exact path="/about" component={about}></Route>
            <Route exact path="/theteam" component={theteam}></Route>
            <Route exact path="/shop" component={shop}></Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
