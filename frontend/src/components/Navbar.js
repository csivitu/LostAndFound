import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ isDarkMode, toggleDarkMode }) {
  return (
    <>
      <div className={`h1 text-center ${isDarkMode ? "text-white" : ""}`}>
        Lost & Found
      </div>
      <nav
        className={`navbar navbar-light ${
          isDarkMode ? "bg-dark" : "bg-white"
        } shadow-sm`}
      >
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <a className="p-2" href="./">
              <img
                src="images/home.svg"
                width="40px"
                height="40px"
                alt="Home"
              />
            </a>
            <a className="navbar-brand" href="#">
              <img
                src="images/user.png"
                className="img-fluid rounded-circle"
                alt=""
                width="40px"
                height="40px"
              />
              <text className={`${isDarkMode ? "text-white" : ""}`}>Name</text>
            </a>
          </div>
          <div className="d-flex">
            <Link to="/upload">
              <button
                className={`btn ${
                  isDarkMode ? "btn-light" : "btn-secondary"
                } me-2`}
              >
                Add Items
              </button>
            </Link>
            <Link to="/user_validation">
              <button
                className={`btn ${
                  isDarkMode ? "btn-light" : "btn-secondary"
                }`}
              >
                LogIn
              </button>
            </Link>
            {/* Dark Mode Toggle */}
            <div className="dark-mode-toggle ml-2">
              <input
                type="checkbox"
                id="darkModeToggle"
                checked={isDarkMode}
                onChange={toggleDarkMode}
              />
              <label htmlFor="darkModeToggle" className="slider"></label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
