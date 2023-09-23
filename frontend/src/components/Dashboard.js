import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Fuse from "fuse.js";
import "./Dashboard.css"; // Import your CSS file for dark mode styles

export default function Dashboard() {
  const initialData = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Victor Wayne" },
    { id: 3, name: "Jane Doe" },
  ];

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

  const options = {
    keys: ["name"],
    threshold: 0.3,
  };

  const fuse = new Fuse(initialData, options);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setData(initialData);
    } else {
      const results = fuse.search(searchTerm);
      setData(results.map((result) => result.item));
    }
  }, [searchTerm]);

  return (
    <div className={`dashboard ${isDarkMode ? "dark-mode" : ""}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} /> {/* Pass isDarkMode and toggleDarkMode props */}
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-sm-11">
            <div className="form-group my-2">
              <input
                className="form-control"
                id="search-box"
                name="email"
                placeholder="Search for Anything..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={
                  isDarkMode
                    ? { backgroundColor: "#333", color: "#fff" }
                    : { backgroundColor: "#fff", color: "#333" }
                }
              />
            </div>
          </div>
          <div className="col-sm-1">
            <div className="text-center my-2">
              <br />
              {/* ... (previous code) */}
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <Footer isDarkMode={isDarkMode} /> {/* Pass isDarkMode prop */}
    </div>
  );
}
