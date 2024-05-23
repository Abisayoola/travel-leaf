import React from "react";
import "./contact.css";

function contact() {
  return (
    <div className="contactsection">
      <div className="contacttext">
        <h3>Contact Us</h3>
        <p>
          Do you have any questions or inquiries? Send us an email and we will
          respond quickly
        </p>
      </div>
      <div className="formcontainer">
        <form className="form">
          <div className="inputcontainer">
            <input
              type="text"
              placeholder="Full Name"
              name="user-name"
              required
            />
            <input
              type="Email"
              placeholder="Email"
              name="user-email"
              required
            />
          </div>
          <textarea
            placeholder="What do you want to know?"
            name="message"></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default contact;
