import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
// import Cart from '../Pages/Cart';

import "./header.scss";

const Header = () => {
  const navigate = useNavigate();

  const cart = useSelector((s) => s.cart);

  function handleLogout() {
    localStorage.removeItem("token");
    toast("logged Out", { type: "info" });
    navigate("/login");
  }

  const [open, setOpen] = useState(false);

  function hanleOpen(){
    setOpen(!open)
  }

  return (
    <div className="sticky-top w-100">
      <header className="text-bg-primary header py-3 shadow ">
        <nav className="container d-flex align-items-center justify-content-between fs-4 ">
          <Link className="text-reset text-decoration-none fs-1" to="/">
            Najot Market
          </Link>
          <div className="burger-wrap d-mg-block">
            <button
              onClick={hanleOpen}
              className="navbar-toggler second-button"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent23"
              aria-controls="navbarSupportedContent23"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div className={open ? "animated-icon2 open" : "animated-icon2"}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
          </button>
          </div>
          <ul className={!open ? "list-unstyled nav-media d-md-none" :"list-unstyled  nav-burger bg-primary d-xl-flex d-lg-none align-items-center m-0 flex-column position-absolute"}>
            <li>
              <Link className="btn btn-primary fs-5" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary fs-5 " to="/">
                About
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary fs-5" to="/">
                Contact
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary fs-5" to="/cart">
                <i className="fa-solid fa-shopping-cart"></i>
                <span className="badge text-bg-danger ms-2">
                  {cart.items.length}
                </span>
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="btn btn-primary fs-4">
                Logout <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </button>
            </li>
          </ul>
          <ul className="list-unstyled d-md-flex d-none align-items-center m-0 gap-3">
            <li>
              <Link className="btn btn-primary fs-4" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary fs-4" to="/">
                About
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary fs-4" to="/">
                Contact
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary fs-4" to="/cart">
                <i className="fa-solid fa-shopping-cart"></i>
                <span className="badge text-bg-danger ms-2">
                  {cart.items.length}
                </span>
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="btn btn-primary fs-4">
                Logout <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
