import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    // confirmPassword: "",
  });

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) navigate("/");
  }, []);

  async function handleRegister(e) {
    e.preventDefault();

    if (value.password !== value.confirmPassword) {
      toast("Passwords do not maych", { type: "error" });
      return;
    }

    try {
      let {
        data: { token, message },
      } = await axios.post(
        "https://xxxx.backendless.app/api/users/register",
        value
      );
      axios.defaults.headers.common["Content-Type"] = "application.json";

      axios.defaults.headers.common["x-auth-token"] = `Bearer ${token}`;
      toast(message, { type: "success" });
      navigate("/");
      localStorage.setItem("token", token);
    } catch (error) {
      toast(error.message, { type: "error" });
    }
  }

  function handleInputChange(e) {
    setValue((oldValue) => ({ ...oldValue, [e.target.name]: e.target.value }));
  }

  return (
    <section className="register-bg">
      <div className="container-sm p-5 back">
        <form onSubmit={handleRegister} className="p-3  shadow mt-5">
          <h1 className="large display-4 text-primary fw-bold">Sign Up</h1>
          <p className="fw-semibold fs-4 text-white mt-3">
            <i className="fas fa-user me-2"></i>Create Your Account
          </p>
          <input
            type="text"
            className="w-100 register-inp mt-3"
            name="name"
            id="name"
            required
            placeholder="Name"
            value={value.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="w-100 register-inp mt-3"
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
            className="w-100 register-inp mt-3"
            name="password"
            id="password"
            required
            placeholder="Password"
            value={value.password}
            onChange={handleInputChange}
          />
          {/* <input type="password" className="form-control mt-3" name='confirmPassword' id='confirmPassword' required placeholder='Confirm Password' value={value.confirmPassword} onChange={handleInputChange}/> */}
          <button className="btn btn btn-outline-primary mt-4 rounded-3 fs-5 text-white mt-3">
            Register
          </button>
          <div className="d-flex gap-2 mt-3">
            <p className="text-white fs-5">Already have an account?</p>
            <Link to={"/login"} className="tdn fs-5">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
