import React from "react";
import Quantedge_logo from "../images/Quantedge_logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light border-bottom sticky-top"
      style={{
        backgroundColor: "#f8f9fa",
        paddingTop: "6px",
        paddingBottom: "6px",
      }}
    >
      <div className="container-fluid" 
       style={{
          paddingLeft: "40px",
          paddingRight: "40px",
        }}>

        {/* LOGO */}
        <Link className="navbar-brand" to="/">
          <img
            src={Quantedge_logo}
            alt="Quantedge_logo"
            style={{
              width: "110px",
              
            }}
          />
        </Link>

        {/* TOGGLER */}
        <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNav"
  aria-controls="navbarNav"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span style={{ fontSize: "26px" }}>&#9776;</span>
</button>

        {/* NAVBAR ITEMS */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-3">

            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;