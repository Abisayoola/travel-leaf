import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./hosts.css";

function hosts() {
  return (
    <div>
      <Navbar />
      <div className="guestcontainer">
        <p>Welcome to Tavel Leaf</p>
        <h1>Host on Travel Leaf - Join Our Green Community!</h1>
        <p>
          List Your Space, Vehicle, Yacht or Experiences and Connect with a
          Global Cannabis-Friendly Community..
        </p>
        <a href="/housesview">
          <button className="listingsbtn">Become a Host</button>
        </a>
      </div>
    </div>
  );
}

export default hosts;
