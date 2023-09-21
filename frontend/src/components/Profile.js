import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

export default function Profile() {
  // Dummy data
  const data = [
    { user_id: 1, name: "John Doe" },
    { user_id: 2, name: "Victor Wayne" },
    { user_id: 3, name: "Jane Doe" },
  ];

  // Gets all items posted by the account with a given email
  const email = "xyz@example.org";
  axios
    .post(
      `http://localhost:3001/item/get/${email}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    )
    .then((response) => console.log(response.data));

  /*
   * Complete the onDelete function to delete items from the database
   * Look at all the routes in the backend for hints.
   * */

  const onDelete = (event) => {
    // Your code here
  };


  /*
    * Finish the return statement to display all items posted by an account with a given email
    * */
  return (
    <>
      <body className="bg-light">
        <Navbar />
        <br />
        <br />
        <div className="container">
          <div className="h1">Your Uploaded Content</div>
          <div className="row">
            {data.map()} 
          </div>
        </div>
        <br />
        <Footer />
      </body>
    </>
  );
}
