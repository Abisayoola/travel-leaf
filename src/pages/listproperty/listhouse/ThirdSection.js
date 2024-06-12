import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

function ThirdSection() {
  const navigate = useNavigate();
  return (
    <section>
      <h1>Set Your Price</h1>
      <p>
        Choose a competitive yet attractive price for your property. Finding the
        sweet spot ensures your listing grabs attention in the market.
      </p>
      <br />

      <form>
        <div className="house-listing-input-breakpoint">
          <div className="house-listing-input">
            <label>Property type</label>
            <span>
              <input type="text" placeholder="Enter property" />
              <IoMdArrowDropdown size={20} />
            </span>
          </div>
          <div className="house-listing-input">
            <label>Number of rooms</label>
            <span>
              <input type="number" placeholder="Enter property" />
            </span>
          </div>
        </div>
      </form>
      <Footer func={() => navigate(`../../houselisting/${4}`)} />
    </section>
  );
}

export default ThirdSection;
