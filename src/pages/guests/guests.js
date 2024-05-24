import React from "react";
import "./guests.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";
import img from "../../assets/Rectangle 8.png";
import bluecar from "../../assets/bluecar.jpg";
import yatch from "../../assets/yatch1.jpg";

function guests() {
  return (
    <div>
      <Navbar />
      <div className="guestcontainer">
        <p>Welcome to Tavel Leaf</p>
        <h1>Explore Cannabis-Friendly Spaces and Experiences!</h1>
        <p>Your Journey to Discovering Green Horizons Starts Here.</p>
        <a href="/housesview">
          <button className="listingsbtn">View available listings</button>
        </a>
      </div>
      <div className="guestsection">
        <div className="sectioncontainer">
          <div className="infotext">
            <h1> Accommodations</h1>{" "}
            <p>
              Discover your ideal cannabis-friendly home, whether it's a
              charming apartment in the heart of the city or a luxurious villa
              nestled in a tranquil countryside. At Travel Leaf, we recognize
              that your travel experience should reflect your unique
              preferences, and that's why we offer a selection of accommodations
              tailored to cannabis enthusiasts.
            </p>
            <div>
              <a href="/guests">
                <button className="listingsbtn">View available listings</button>
              </a>
            </div>
          </div>
          <img alt="" src={img} />
        </div>
        <div className="sectioncontainer">
          <div className="imgcontainer">
            <img className="topimg" alt="" src={bluecar} />
            <img className="bottomimg" alt="" src={yatch} />
          </div>
          <div className="infotext">
            <h1> Vehicles and Yatchs</h1>{" "}
            <p>
              Explore the open road or set sail on the high seas with our wide
              array of cannabis-friendly vehicle and yacht rentals. At Travel
              Leaf, we understand that your journey is not just about reaching
              your destination; it's about embracing the entire experience.
            </p>
            <div>
              <a href="/guests">
                <button className="listingsbtn">View available listings</button>
              </a>
            </div>
          </div>
        </div>
        <div className="sectioncontainer">
          <div className="infotext">
            <h1> Unique Experiences</h1>{" "}
            <p>
              Engage in unforgettable cannabis-friendly experiences hosted by
              locals. From cannabis cooking classes to scenic smoke spots,
              discover a new world of green adventures.
            </p>
            <div>
              <a href="/guests">
                <button className="listingsbtn">View available listings</button>
              </a>
            </div>
          </div>
          <img alt="" src={img} />
        </div>
        <div className="sectioncontainer">
          <img alt="" src={img} />
          <div className="infotext">
            <h1> Latest Cannabis Products</h1>{" "}
            <p>
              Stay updated with the latest cannabis products available near your
              accommodation. Know where to buy and safe spaces to enjoy
            </p>
            <div>
              <a href="/guests">
                <button className="listingsbtn">View available listings</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default guests;
