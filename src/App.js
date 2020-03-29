import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Pages
import login from "./pages/login";
import signup from "./pages/signup";
import home from "./pages/home";
import shop from "./pages/shop";
import about from "./pages/about";
import theteam from "./pages/theteam";
import businessmodel from "./pages/businessmodel";

import cart from "./pages/cart";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

import axios from "axios";
import jwtDecode from "jwt-decode";
import item from "./pages/item";

axios.defaults.baseURL = "https://us-central1-luxurity.cloudfunctions.net/api";

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/login" component={login}></Route>
            <Route exact path="/signup" component={signup}></Route>

            <Route exact path="/" component={home}></Route>
            <Route exact path="/about" component={about}></Route>
            <Route exact path="/theteam" component={theteam}></Route>
            <Route
              exact
              path="/businessmodel"
              component={businessmodel}
            ></Route>
            <Route exact path="/shop" component={shop}></Route>
            <Route exact path="/items/:itemId" component={item}></Route>

            <Route exact path="/cart" component={cart}></Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
