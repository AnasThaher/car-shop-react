import React from "react";
import { Link } from "react-router-dom";
import { Route, Redirect } from 'react-router'

const Navbar2 = () => {
  window.onscroll = () => {
    if (window.scrollY >= 100) {
      document.getElementById("headr").classList.add("header-onscroll");
    } else {
      document.getElementById("headr").classList.remove("header-onscroll");
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar2">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
            CMART
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

            <div className="navbar-item nav-hover">
              <ul className="navbar-nav me-5 mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="carListing" className="nav-link">
                    Car Listing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Pages
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="Contact" className="nav-link">
                    Contact
                  </Link>
                </li>
                <a href="#" className="nav-link nav-icon">
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </a>

                <a href="#" className="nav-link nav-icon">
                  <i className=" nav-item fa-solid fa-magnifying-glass"></i>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
