import React from "react";
import "./Info.css";
import aboutimg from "../../assets/aboutimg.png";
import rectangle from "../../assets/Image Block.png";

const Info = () => {
  return (
    <div>
      <div className="aboutus">
        <img alt="" src={aboutimg} />
        <div className="infotext">
          <h1> About Us</h1>{" "}
          <p>
            Travel Leaf is a unique platform for cannabis enthusiasts to
            discover and book cannabis-friendly travel experiences worldwide.
            Whether you're a host or a traveler, we offer a safe and enjoyable
            way to connect and explore with a green perspective.
          </p>
          <div>
            <a href="/signup">
              <button className="coloredbutton">Join us</button>
            </a>
            <a href="/guests">
              <button className="transparentbutton">Learn more</button>
            </a>
          </div>
        </div>
      </div>
      <div className="aboutus">
        <div className="infotextdis">
          <h1>Unlock unique experiences</h1>{" "}
          <p>
            Travel Leaf connects you with cannabis-friendly hosts offering cozy
            homes, luxurious yachts, reliable vehicles, and unforgettable
            adventures. Explore local cannabis cultures, find the latest
            products, and enjoy safe spaces for your journey.
          </p>
          <div>
            <a href="/signup">
              <button className="coloredbutton">Join us</button>
            </a>
            <a href="/viewhouses">
              <button className="transparentbutton">
                Discover experiences
              </button>
            </a>
          </div>
        </div>{" "}
        <img alt="" src={rectangle} />
      </div>
    </div>
  );
};

export default Info;
