import React from "react";

// stateless funcional component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand fixed-top">
      <a className="navbar-brand pl-2" href="#">
        Total Items{" "}
        <span className="badge badge-pill badge-secondary m-2">
          {totalCounters}
        </span>
      </a>
      <a className="nav navbar-nav ml-auto pr-2 cart-icon" href="#">
        <i className="fas fa-shopping-cart" />
      </a>
    </nav>
  );
};

export default NavBar;
