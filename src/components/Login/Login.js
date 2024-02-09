import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import LoginImage from "../../images/login.png";
import googleImg from "../../images/google.svg"

const login = () => {
  const [creds, setCreds] = useState({
    identifier: "",
    password: "",
  });

  const handleLogin = () => {};

  const handleGoogleLogin = () =>{};

  return (
    <div className="login_container">
      <div className="sidehug">
        <img className="login_image" src={LoginImage} alt="" />
      </div>
      <div className="right_sidehug">
        <div className="signIn">
          <form onSubmit={handleLogin} className="login_form">
            <h3 className="login_center login_heading">Login</h3>
            <div className="login_element">
              <label>Email</label>
              <input
                onChange={(e) => (e) =>
                  setCreds({ ...creds, identifier: e.target.value })}
                type="text"
                name="username"
                id="username"
                value={creds.username}
                placeholder="Email"
              />
            </div>
            <div  className="login_element">
              <label>Password </label>
              <input
                onChange={(e) =>
                  setCreds({ ...creds, password: e.target.value })
                }
                type="password"
                name="password"
                id="password"
                value={creds.password}
                placeholder="Password"
              />
            </div>
            <div className="login_center">
              <input type="submit" value="Login" className="login_button" />
            </div>
            <div className="orDivider">
              <hr />
              <span>OR</span>
              <hr />
            </div>
            <div className="login_thirdParty">
              <button className="login_authBtn" onClick={handleGoogleLogin}>
                <img src={googleImg} alt="" className="login_google_image"/>
                Sign in using Google
              </button>
            </div>
          </form>
          <p className="login_subtitle">
            Don't have an account?{" "}
            <Link to="/register">
              <a>Sign-up</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default login;
