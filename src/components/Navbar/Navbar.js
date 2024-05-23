import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="container">
      <img src={Logo} alt="" className="logo" />
      <ul className="nav-menu">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/listings">List Your Property</a>
        <a href="/contact">Contact</a>
        <ul className="nav-right">
          <a>EN</a>
          <a href="/login">
            <button className="btn">Login</button>
          </a>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
