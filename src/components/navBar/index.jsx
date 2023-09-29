// src/components/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Filter from '../Productfilter';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Capstone</Link>
        {/* Link to Home */}
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
              {/* Link to Home */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
              {/* Link to Cart */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
              {/* Link to Login */}
            </li>
            <Filter />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
