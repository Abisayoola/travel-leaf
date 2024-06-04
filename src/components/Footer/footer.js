import React from "react";
import "./footer.css";
import discord from "../../assets/DiscordLogo.png";
import facebook from "../../assets/FacebookLogo.png";
import twitter from "../../assets/TwitterLogo.png";
import instagram from "../../assets/InstagramLogo.png";

function footer() {
  return (
    <div className="footersection">
      <div className="footer">
        <div className="footerlinks">
          <div className="socials">
            <img alt="" src={discord} />
            <img alt="" src={facebook} />
            <img alt="" src={twitter} />
            <img alt="" src={instagram} />
          </div>
        </div>
        <div className="footerlinks">
          <h3>Company</h3>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/services">Services</a>
          <a href="/team">Meet the team</a>
        </div>
        <div className="footerlinks">
          <h3>About Us</h3>
          <a href="/privacypolicy">Privacy policy</a>
          <a href="/blog">Blog</a>
          <a href="/terms">Terms of use</a>
        </div>
        <div className="footerlinks">
          <h3>Contact Us</h3>
          <p>help@horizon.com</p>
          <p>+234 8145 904 798</p>
        </div>
      </div>
      <div className="belowfooter">
        <p>Copyright TravelLeaf 2024</p>
      </div>
    </div>
  );
}

export default footer;
