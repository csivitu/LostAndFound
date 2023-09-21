import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="h1 text-center">Lost & Found</div>
      <nav class="navbar navbar-light bg-white shadow-sm">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              src="images/user.png"
              class="img-fluid rounded-circle"
              alt=""
              width="40px"
              height="4px"
            />
            <text>Name</text>
          </a>

          <div class="d-flex">
            <Link to="/upload">
              <button class="btn btn-secondary me-2">Add Items</button>
            </Link>
            <Link to="/user_validation">
              <button class="btn btn-secondary">LogIn</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
