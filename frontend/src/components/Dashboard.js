import React from "react";
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
      <div className="container">
        <Navbar />
        <div className="row">
          <div className="col-md-8">
            <div className="form-group my-2">
              <input
                className="form-control"
                name="email"
                placeholder="Search for Anything..."
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center my-2">
              <button className="btn btn-secondary shadow">Search</button>
            </div>
          </div>
        </div>

        <div className="row">
          {data.map((user) => (
            <div className="col-md-4" key={user.id}>
              <div className="card shadow my-2 custom-card">
                <img
                  className="card-img-top img-thumbnail img-fluid custom-img"
                  src={`images/${user.id}.jpg`}
                  alt="Image"
                />
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
