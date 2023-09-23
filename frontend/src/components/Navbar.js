// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="images/user.png"
            className="img-fluid rounded-circle me-2"
            alt=""
            width="40px"
            height="40px"
          />
          <span className="align-middle">Name</span>
        </Link>

        <div className="d-flex">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/upload">
                Add Items
              </Link>
            </li>
          </ul>
          <Link to="/user_validation">
            <button className="btn btn-secondary">Log In</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
