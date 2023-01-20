import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  window.onscroll = () => {
    if (window.scrollY >= 100) {
      document.getElementById("headr").classList.add("header-onscroll");
    } else {
      document.getElementById("headr").classList.remove("header-onscroll");
    }
  };
  const [login, setlogin] = useState(JSON.parse(localStorage.getItem("isLogin")))
   
  console.log(login);
  useEffect(() => {
  }, [login]);
  const handellogout = ()=>{
    localStorage.clear();
    setlogin(JSON.parse(localStorage.getItem("isLogin")));
  }
  return (
    <div>
      <header id="headr">
        <nav className="navbar navbar-expand-lg ">
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
                  {login ? (

                  <li className="nav-item">
                    <Link to="/orders" className="nav-link">
                      orders
                    </Link>
                  </li>
                                    ) : null}
                  <li className="nav-item">
                    <Link to="Contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                  {!login ? (
                    <li className="nav-item">
                      <Link to="/Login" className="nav-link">
                        Login
                      </Link>
                    </li>
                  ) : null}

                  {!login ? (
                    <li className="nav-item">
                      <Link to="/Singup" className="nav-link">
                        Singup
                      </Link>
                    </li>
                  ) : null}
                  {login ? (
                    <li className="nav-item">
                      <Link onClick={handellogout} className="nav-link">
                        Logout
                      </Link>
                    </li>
                  ) : null}
                  {/* <a href="#" className="nav-link nav-icon">
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  </a>

                  <a href="#" className="nav-link nav-icon">
                    <i className=" nav-item fa-solid fa-magnifying-glass"></i>
                  </a> */}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
