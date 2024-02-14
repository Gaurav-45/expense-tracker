import React, { useState } from "react";
import "./Register.css";
import RegisterImage from "../../images/register.png";
import googleImg from "../../images/google.svg"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Register = () => {
  const [creds, setCreds] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = () => {};

  const handleGoogleRegister = () => {};

  return (
    <div className="register_container">
      <div className="sidehug">
        <img className="register_image" src={RegisterImage} alt="" />
      </div>
      <div className="right_sidehug">
        <div className="signIn">
          <form onSubmit={handleRegister} className="login_form">
            <h3 className="register_center register_heading">Register</h3>
            <div className="register_element">
              <label>Name</label>
              <input
                onChange={(e) => (e) =>
                  setCreds({ ...creds, username: e.target.value })}
                type="text"
                name="username"
                id="username"
                value={creds.username}
                placeholder="Username"
              />
            </div>
            <div className="register_element">
              <label>Email</label>
              <input
                onChange={(e) => (e) =>
                  setCreds({ ...creds, email: e.target.value })}
                type="text"
                name="username"
                id="username"
                value={creds.email}
                placeholder="Email"
              />
            </div>
            <div className="register_element">
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
            <div className="register_center">
              <input type="submit" className="register_button" />
            </div>
            <div className="orDivider">
              <hr />
              <span>OR</span>
              <hr />
            </div>
            <div className="register_thirdParty">
              <button className="register_authBtn" onClick={handleGoogleRegister}>
                <img src={googleImg} alt="" className="register_google_image" />
                Sign in using Google
              </button>
            </div>
          </form>
          <p className="register_subtitle">
            Already have an accounr?{" "}
            <Link to="/login">
              <a>Sign-in</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
