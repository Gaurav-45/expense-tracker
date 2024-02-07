import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <p className="logo">KITAAB</p>
        <div className="login_right">
            <div className="login_btn">
                <button className="login">Login</button>
                <button className="sign_up">Sign up</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar