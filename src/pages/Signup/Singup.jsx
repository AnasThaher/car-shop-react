import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./Login.css"
import swal from 'sweetalert';

import "./Signup.css";
import carImg from "../../assets/image/car.png";
const Singup = () => {
  const [user, setuser] = useState();
  const Singupfun = (request) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: request.email,
        password: request.password,
        name: request.name,
      }),
    };
    fetch("http://127.0.0.1:8000/api/register", requestOptions)
      .then((res) => res.json())
      .then((json) => {
        if (json.email) {
          navigate("/", { replace: true });
        } else {
         swal(json);

        }
      });
  };

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const request = {
      email: e.target.email.value,
      password: e.target.password.value,
      name: e.target.name.value,
    };
    Singupfun(request);
  };

  const goToLogin = () => {
    navigate("/login", { replace: true });
  };

  return (
    <div>
      <div className="Main-container">
        <div className="container-login">
          <div className="wrap-login">
            <div className="login-pic">
              <img src={carImg} alt="IMG" />
            </div>

            <form className="login-form" onSubmit={handleSignUp}>
              <span className="login-form-title">Sign Up</span>

              <div className="wrap-input">
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Full Name"
                  required
                />
                <span className="focus-input"></span>
                <span className="symbol-input">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>
              <div className="wrap-input">
                <input
                  type="text"
                  className="input"
                  name="email"
                  placeholder="Email"
                  required
                />
                <span className="focus-input"></span>
                <span className="symbol-input">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>
              <div className="wrap-input">
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                  required
                />
                <span className="focus-input"></span>
                <span className="symbol-input">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>

              <div className="login-form-btn-container">
                <button className="login-form-btn">Sign Up</button>
              </div>

              <div className="text-center p-t-2">
                <a href="#" className="txt2">
                  Login to your account{" "}
                  <i
                    className="fa fa-long-arrow-right "
                    aria-hidden="true"
                    onClick={goToLogin}
                  ></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singup;
