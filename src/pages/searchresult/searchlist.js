import React, { useState } from "react";
import Navcol from "../../components/Navbar/NavCol";
import Footer from "../../components/Footer/footer";
import search_normal from "../../assets/search_normal.png";
import {
  FaLocationDot,
  FaCalendarDays,
  FaPerson,
  FaUser,
} from "react-icons/fa6";
import "react-datepicker/dist/react-datepicker.css";
import SearchItem from "../../components/searchItem/searchItem";
import "./searchlist.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function Searchlist() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <Navcol />
      <hr></hr>
      <div className="searchcontainer">
        <div className="bookingSearchItem">
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
        <vr></vr>
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
          Number of visitors
          <div classname="bookingSearchResult">
            <FaUser className="searchIcon" />
            <span className="bookingSearchInput"> 20</span>
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
      <hr></hr>
      <div className="resultcontainer">
        <div className="searchresult">
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
        </div>
        <div className="mapcontainer">map</div>
      </div>
      <Footer />
    </div>
  );
}

export default Searchlist;
