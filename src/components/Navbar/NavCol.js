import React from "react";
import "./Navbar.css";
import Logo from "../../assets/Final RGB Full Color Green Essence Florida-03 1.png";

const Navcol = () => {
  return (
    <nav className="coloredcontainer">
      <img src={Logo} alt="" className="logo" />
      <ul className="nav-menu">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/listings">List Your Property</a>
        <a href="/contact">Contact</a>
      </ul>
      <ul className="nav-right">
        <a>EN</a>
        <a href="/login">
          <button className="btn">Login</button>
        </a>
      </ul>
    </nav>
  );
};

export default Navcol;
