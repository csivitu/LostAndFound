import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LoginSignUp from "./LoginSignUp";

import axios from "axios";

// Add redirects here based on authentication status

export default function Upload() {
  if (localStorage.getItem("token") == undefined) {
    return <LoginSignUp />
  }
  let [formData, setFormData] = useState({
    itemname: "",
    fplace: "",
    contactno: "",
    email: "",
    roomno: "",
    bname: "",
  });

  let [file, setFile] = useState();

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  };

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios.postForm(
      "http://localhost:3001/item/upload",
      {
        name: formData.itemname,
        location: formData.fplace,
        contact: formData.contactno,
        email: formData.email,
        room: formData.roomno,
        block: formData.bname,
        image: file,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    );
  };

  return (
    <>
      <body className="bg-light">
        <Navbar />
        <br />
        <br />
        <div className="container-fluid">
          <div className="d-flex justify-content-center align-items-center">
            <div className="shadow-sm rounded col-xl-6 col-sm-12">
              <form
                encType="multipart/form-data"
                onSubmit={onSubmit}
                className="p-5 bg-white"
              >
                <div className="text-center h1">Upload Found Item</div>
                <br />
                <div className="form-group">
                  <label class="">Item Name</label>
                  <input
                    className="form-control"
                    name="itemname"
                    placeholder="Item Name"
                    value={formData.itemname}
                    onChange={onChange}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label class="">Finding Place</label>
                  <input
                    className="form-control"
                    name="fplace"
                    placeholder="Finding Place"
                    value={formData.fplace}
                    onChange={onChange}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label class="">Contact No.</label>
                  <input
                    className="form-control"
                    name="contactno"
                    placeholder="Contact No."
                    value={formData.contactno}
                    onChange={onChange}
                  />
                  <br />
                </div>
                <div className="form-group">
                  <label class="">Email</label>
                  <input
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={onChange}
                  />
                  <br />
                </div>
                <div className="form-group">
                  <label class="">Room No.</label>
                  <input
                    className="form-control"
                    name="roomno"
                    placeholder="Room No."
                    value={formData.roomno}
                    onChange={onChange}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label class="">Block Name</label>
                  <input
                    className="form-control"
                    name="bname"
                    placeholder="Block Name"
                    value={formData.bname}
                    onChange={onChange}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label class="">Upload Image</label>
                  <input
                    type="file"
                    className="form-control"
                    name="image"
                    placeholder="Upload File"
                    onChange={onFileChange}
                  />
                </div>
                <br />
                <div className="text-center">
                  <button className="btn btn-secondary shadow">Upload</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br />
        <Footer />
      </body>
    </>
  );
}
