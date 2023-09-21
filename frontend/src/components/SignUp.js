import React, { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
    console.log(formData);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:3001/register", {
        email: formData.email,
        password: formData.password,
        fName: formData.fName,
        lName: formData.lName,
      })
      .then(
        (response) => {
          if (response.status == 200) {
            localStorage.setItem("token", response.data.token)
          }
        },
        (error) => {
          if (error.response.status == 400) {
            console.log("failed");
          }
        },
      );
  };

  return (
    <>
      <form encType="multipart/form-data" onSubmit={onSubmit}>
        <div className="p-5 bg-white">
          <div className="text-center h1">Sign Up</div>
          <br />
          <div className="form-group">
            <label className="">First Name</label>
            <input
              className="form-control"
              name="fName"
              placeholder="First Name"
              value={formData.fName}
              onChange={onChange}
            />
          </div>
          <br />
          <div className="form-group">
            <label className="">Last Name</label>
            <input
              className="form-control"
              name="lName"
              placeholder="Last Name"
              value={formData.lName}
              onChange={onChange}
            />
          </div>
          <br />
          <div className="form-group">
            <label className="">Email</label>
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
            <label className="">Password</label>
            <input
              className="form-control"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={onChange}
            />
          </div>
          <br />
          <div className="text-center">
            <button className="btn btn-secondary shadow">Sign Up</button>
          </div>
        </div>
      </form>
    </>
  );
}
