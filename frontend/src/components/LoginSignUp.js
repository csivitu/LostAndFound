import React, { useState, useEffect } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LoginSignUp() {
  const [login, setlogin] = useState(true);
  function log() {
    setlogin(true);
  }
  function siu() {
    setlogin(false);
  }
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-light">
        <Navbar />
        <br />
        <br />
        <div className="container-fluid">
          <div className="d-flex justify-content-center align-items-center">
            <div className="border border-2 shadow-sm rounded col-xl-6 col-sm-12">
              <div className="text-center border border-top-0 border-right-0 border-left-0 d-flex flex-row">
                <div
                  className={`col p-2 border border-top-0 border-bottom-0 border-left-0 ${
                    login ? "bg-white shadow-sm" : "bg-light"
                  }`}
                  onClick={log}
                >
                  Login
                </div>
                <div
                  className={`col p-2 ${
                    !login ? "bg-white shadow-sm" : "bg-light"
                  }`}
                  onClick={siu}
                >
                  Sign Up
                </div>
              </div>
              {login ? <Login /> : <SignUp />}
            </div>
          </div>
        </div>
        <br />
        <Footer />
      </body>
    </>
  );
}
