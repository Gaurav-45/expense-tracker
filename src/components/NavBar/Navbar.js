import React from "react";
import "./Navbar.css";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  return (
    <div className="navbar">
      <p className="logo">KITAAB</p>
      <div className="login_right">
        <div className="login_btn">
          <button
            className="login"
            onClick={(e) => {
              e.preventDefault();
              history.push("/login");
            }}
          >
            Login
          </button>
          <button
            className="login"
            onClick={(e) => {
              e.preventDefault();
              history.push("/register");
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
