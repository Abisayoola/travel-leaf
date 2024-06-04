import React, { useState } from "react";
import "./Hero.css";
import search_normal from "../../assets/search_normal.png";
import { FaLocationDot, FaHouse, FaCalendarDays } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Hero = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="hero container">
      <div className="hero-text">
        <p>Welcome to Tavel Leaf</p>
        <h1>Your Gateway to Cannabis-Friendly Travels!</h1>
        <p>
          Discover, Book, and Experience the Best Cannabis-Friendly
          Accommodations, Vehicles, Yachts, and Unique Adventures.
        </p>
        <div className="bookingSearch">
          <div className="bookingSearchItem">
            Location
            <div classname="bookingSearchResult">
              <FaLocationDot className="searchIcon" />
              <input
                type="text"
                placeholder="Florida, USA"
                className="searchInput"
              />
            </div>
          </div>
          <div className="bookingSearchItem">
            Arrival Date
            <div classname="bookingSearchResult">
              <FaCalendarDays className="searchIcon" />
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="date"
              />
            </div>
          </div>
          <div className="bookingSearchItem">
            Departure Date
            <div classname="bookingSearchResult">
              <FaCalendarDays className="searchIcon" />
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="date"
              />
            </div>
          </div>
          <div className="bookingSearchItem">
            Property
            <div classname="bookingSearchResult">
              <FaHouse className="searchIcon" />
              <span className="bookingSearchInput"> House</span>
            </div>
          </div>
          <a href="/searchresult">
            {" "}
            <button className="searchbtn">
              <img src={search_normal} alt="" />
              Search
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
