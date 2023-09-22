import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Dashboard() {
  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Victor Wayne" },
    { id: 3, name: "Jane Doe" },
  ];

  // CSS styles as a string
  const styles = `
    .image-container {
      position: relative;
      overflow: hidden;
      padding-top: 75%; /* 4:3 Aspect Ratio (You can adjust this value) */
    }

    .image-container img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `;

  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-light">
        <style>{styles}</style> {/* Include the CSS styles here */}
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
              <div className={`col-sm-4`} key={user.id}>
                <div className="card shadow my-2 p-3">
                  <div className="image-container">
                    <img
                      className="card-img-top img-thumbnail"
                      src={`images/${user.id}.jpg`}
                      alt="Image"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
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
