import React from "react";
import "./Featured.css";
import rectangle from "../../assets/Image Block.png";
import image from "../../assets/image2.png";
import imagee from "../../assets/Image3.png";
import car1 from "../../assets/image 15.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import carr from "../../assets/7a74b74f5f5bd8a301ac7d6643255a85.png";

const Featured = () => {
  return (
    <div>
      <div className="fcText">
        <div className="featuredContainer">
          <h1>Your Dream Getaway Awaits You</h1>
          <p>
            Discover a World of Comfort and Style - Explore Our Handpicked
            Selection of Available Houses for Your Next Stay.
          </p>
        </div>
        <a href="/viewhouses">
          <button className="featuredButton">View All</button>
        </a>
      </div>
      <div className="featured">
        <div className="featuredItem">
          <img alt="" src={rectangle} className="featuredImg" />
          <div className="featuredTitle">
            <h1> Houston Texas</h1>
            <p>Rochester</p>
          </div>
        </div>
        <div className="featuredItem">
          <img alt="" src={image} className="featuredImg" />
          <div className="featuredTitle">
            <h1> Houston Texas</h1>
            <p>Rochester</p>
          </div>
        </div>
        <div className="featuredItem">
          <img alt="" src={imagee} className="featuredImg" />
          <div className="featuredTitle">
            <h1> Houston Texas</h1>
            <p>Rochester</p>
          </div>
        </div>
      </div>
      <div className="hostcontainer">
        <h1>Share Your Space with the World</h1>
        <p>
          Unlock New Opportunities and Welcome Travelers from Across the Globe.
          Become a Host on Travel Leaf and Start Earning Today!
        </p>
        <div>
          <a href="/hostdashboard">
            {" "}
            <button className="hostbtn">Become a host</button>
          </a>
          <a href="/hostpage">
            <button className="hostmorebtn">Learn More</button>
          </a>
        </div>
      </div>
      <div className="carsection">
        <div className="carsectiontext">
          <h1>Explore Car Rentals for Your Journey</h1>
          <p>
            Simplify Your Travel with Easy Car Rentals. Explore, Drive, and
            Enjoy Your Journey Hassle-Free.
          </p>
          <a href="/viewcars">
            <button>Discover experiences</button>
          </a>
        </div>
        <div>
          <img alt="" src={carr}></img>
        </div>
      </div>

      <div className="fcText">
        <div className="featuredContainer">
          <h1>Discover Your Next Ride</h1>
          <p>
            Explore Our Fleet of Cars and Vehicles Ready for Your Adventure.
            Start Your Journey Now!
          </p>
        </div>
        <a href="/viewcars">
          <button className="featuredButton">View All</button>
        </a>
      </div>
      <div className="featured">
        <div className="featuredItem">
          <img alt="" src={car1} className="featuredImg" />
          <div className="featuredTitle">
            <h1> Acura Integra Type S</h1>
            <p>Small Sport Sedans</p>
          </div>
        </div>
        <div className="featuredItem">
          <img alt="" src={car2} className="featuredImg" />
          <div className="featuredTitle">
            <h1> Alfa Romeo Tonali</h1>
            <p>Luxury Hybrid SUVs</p>
          </div>
        </div>
        <div className="featuredItem">
          <img alt="" src={car3} className="featuredImg" />
          <div className="featuredTitle">
            <h1>2024 Audi A6</h1>
            <p>Luxurious Sedan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
