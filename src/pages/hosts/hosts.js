import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./hosts.css";
import img from "../../assets/hosts1.png";
import imgg from "../../assets/imaggg.png";
import Footer from "../../components/Footer/footer";

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
      <div>
        <div className="sectioncontainer">
          <div className="textcontainer">
            <div className="heading">
              <h2>- Why Host with Us -</h2>
            </div>
            <h1>Unique Community</h1>{" "}
            <p>
              Cater to a niche yet growing community of cannabis enthusiasts.
            </p>
            <h1>Earn extra income</h1>{" "}
            <p>
              Monetize your assets by sharing them with like-minded individuals.
            </p>
            <h1>Our Support</h1>{" "}
            <p>
              Enjoy seamless hosting with our dedicated support and
              user-friendly property management system
            </p>
            <div>
              <a href="/guests">
                <button className="listingsbtn">Become a host</button>
              </a>
            </div>
          </div>
          <img alt="" src={img} />
        </div>
      </div>
      <div className="sectioncontainer">
        {" "}
        <img alt="" src={imgg} />
        <div className="textcontainer">
          <h2> Property Management System</h2>{" "}
          <p>
            Manage all your listings, bookings, account receivables and payables
            effortlessly with our integrated property management system. Track
            repairs, maintenance work, and financial transactions all in one
            place. 
          </p>
          <div>
            <a href="/guests">
              <button className="listingsbtn">Become a host</button>
            </a>
          </div>
        </div>
      </div>
      <div className="listingcontainer">
        <h1>List your space today</h1>
        <p>
          List Your Space, Vehicle, Yacht or Experiences and Connect with a
          Global Cannabis-Friendly Community.
        </p>
        <button>List your Space</button>
      </div>
      <Footer />
    </div>
  );
}

export default hosts;
