import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) navigate("/");
  }, []);

  console.log(value); 
  async function handleRegister(e) {
    e.preventDefault();

    if (value.password !== value.password2) {
      toast("Passwords do not maych", { type: "error" });
      return;
    }
    try {
      let { token, message } = await axios.post(
        "https://medtex.pythonanywhere.com/ru/account/register/",
        value
      );
      console.log(token);
      axios.defaults.headers.common["Content-Type"] = "application.json";
      localStorage.setItem("token", token);
      toast(message, { type: "success" });
      navigate("/");
    } catch (error) {
      toast(error.message, { type: "error" });
    }
  }

  function handleInputChange(e) {
    setValue((oldValue) => ({ ...oldValue, [e.target.name]: e.target.value }));
  }

  return (
    // <section className="">
      <div className=" min-vh-100  d-flex align-items-center justify-content-center">
        <form onSubmit={handleRegister} className="bg-white rounded-3 shadow border w-50 p-3">
          <h1 className="large display-4 text-primary fw-bold">Sign Up</h1>
          <p className="fw-semibold fs-4  mt-3">
            <i className="fas fa-user me-2"></i>Create Your Account
          </p>
          <input
            type="text"
            className="w-100 mt-3 form-control"
            name="first_name"
            id="first_name"
            required
            placeholder="First Name"
            value={value.first_name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="w-100 mt-3 form-control"
            name="last_name"
            id="last_name"
            required
            placeholder="Last Name"
            value={value.last_name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="w-100 mt-3 form-control"
            name="username"
            id="username"
            required
            placeholder="Username"
            value={value.username}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="w-100 mt-3 form-control"
            name="email"
            id="eamil"
            required
            placeholder="Email Address"
            value={value.email}
            onChange={handleInputChange}
          />
          <p className="text-secondary">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </p>
          <input
            type="password"
            className="w-100 mt-3 form-control"
            name="password"
            id="password"
            required
            placeholder="Password"
            value={value.password}
            onChange={handleInputChange}
          />
          <input
            type="password"
            className="w-100 mt-3 form-control"
            name="password2"
            id="password2"
            required
            placeholder="Confirm Password"
            value={value.password2}
            onChange={handleInputChange}
          />
          {/* <input type="password" className="form-control mt-3" name='confirmPassword' id='confirmPassword' required placeholder='Confirm Password' value={value.confirmPassword} onChange={handleInputChange}/> */}
          <button className="btn btn btn-outline-primary mt-4 rounded-3 fs-5 mt-3">
            Register
          </button>
          <div className="d-flex gap-2 mt-3">
            <p className=" fs-5">Already have an account?</p>
            <Link to={"/login"} className="fs-5">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    // </section>
  );
};

export default Register;
