import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Dashboard() {
  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Victor Wayne" },
    { id: 3, name: "Jane Doe" },
  ];
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-light">
        <Navbar />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm-11">
              <div className="form-group my-2">
                <input
                  className="form-control"
                  name="email"
                  placeholder="Search for Anything..."
                />
              </div>
            </div>
            <div className="col-sm-1">
              <div className="text-center my-2">
                <button className="btn btn-secondary shadow">Search</button>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            {data.map((user) => (
              <div className={`col-sm-4`}>
                <div className="card shadow my-2 p-3 h-100">
                  <img
                    className="card-img-top img-thumbnail"
                    src={`images/${user.id}.jpg`}
                    alt="Image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    {/*<span className="btn btn-secondary">Go somewhere</span>*/}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
        <Footer />
      </body>
    </>
  );
}
