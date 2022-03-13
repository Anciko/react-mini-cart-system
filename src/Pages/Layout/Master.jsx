import React from "react";
import { Link } from "react-router-dom";

function Master(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <Link className="navbar-brand text-primary" to="/">
          React Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse"  id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Carts <span className="badge badge-pill badge-primary"> { props.cart.length } </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {props.children}
    </div>
  );
}

export default Master;
