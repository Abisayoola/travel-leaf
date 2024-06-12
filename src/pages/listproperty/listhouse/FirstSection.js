import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

function FirstSection() {
  const navigate = useNavigate();
  return (
    <section>
      <h1>Let’s get started</h1>
      <br />
      <p>
        Start by entering the property address and selecting the type of house
        you're listing. Your property's perfect match is just a few steps away
      </p>
      <br />
      <form className="house-listing-form">
        <div className="house-listing-input">
          <label>Enter property address</label>
          <span>
            <input type="text" placeholder="Enter property" />
            <CiSearch size={20} />
          </span>
        </div>
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
      <Footer func={() => navigate(`../../houselisting/${2}`)} />
    </section>
  );
}

export default FirstSection;
