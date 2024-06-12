import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="nav-con">
      <div className="nav">
        <img src={Logo} alt="" className="logo" />
        <ul className="nav-menu">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="/listings">List Your Property</a>
          <a href="#contact">Contact</a>{" "}
        </ul>
        <ul className="nav-right">
          <a>EN</a>
          <a href="/login">
            <button className="btn">Login</button>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
