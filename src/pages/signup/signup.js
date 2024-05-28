import React from "react";
import image from "../../assets/login.png";
import "../login/login.css";

function login() {
  return (
    <div className="logincontainer">
      <div className="logindetail">
        <h1>Hi there!</h1>
        <p>Welcome to the tavel leaf community</p>
        <button className="googlebtn">Continue with Google</button>
        <hr></hr>
        <div className="contactcontainer">
          <p>Full name</p>
          <input placeholder="Enter your name" type="text" title="Full name" />
          <p>Email</p>
          <input placeholder="yourmail@mail.com" type="text" title="Email" />
          <button className="borderlessbtn">Forgot password?</button>
        </div>
        <a href="/hostdashboard">
          <button className="contbtn">Continue</button>
        </a>
        <div className="signin">
          <p>Have an account?</p>
          <a href="/login">Sign in </a>
        </div>
      </div>
      <div className="imgcontainer">
        <img alt="" src={image}></img>
      </div>
    </div>
  );
}

export default login;
