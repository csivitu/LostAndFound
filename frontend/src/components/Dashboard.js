import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Fuse from "fuse.js"; // Import Fuse

export default function Dashboard() {
  const initialData = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Victor Wayne" },
    { id: 3, name: "Jane Doe" },
  ];

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");

  const options = {
    keys: ["name"], // Specify the key(s) to search within
    threshold: 0.3, // Adjust the threshold for fuzzy matching
  };

  const fuse = new Fuse(initialData, options);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      // Reset data when the search input is empty
      setData(initialData);
    } else {
      // Use Fuse to perform fuzzy search and update data
      const results = fuse.search(searchTerm);
      setData(results.map((result) => result.item));
    }
  }, [searchTerm]);

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
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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
                  <img
                    className="card-img-top img-thumbnail"
                    src={`images/${user.id}.jpg`}
                    alt="Image"
                    style={{ width: "100%", height: "20rem" }}
                  />
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
