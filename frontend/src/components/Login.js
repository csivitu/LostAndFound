import { useState, React } from "react";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({
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
      .post("http://localhost:3001/login", {
        email: formData.email,
        password: formData.password,
      })
      .then(
        (response) => {
          if (response.status == 200) {
            localStorage.setItem("token", response.data.token);
          }
        },
        (error) => console.log(error),
      );
  };

  return (
    <>
      <form onSubmit={onSubmit} className="p-5 bg-white">
        <div className="text-center h1">Login</div>
        <br />
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
        <div>
          <label class="">Password</label>
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
          <button className="btn btn-secondary shadow">Login</button>
        </div>
      </form>
    </>
  );
}
