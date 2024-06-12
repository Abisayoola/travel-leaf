import React from "react";
import {} from "react-icons";
import { FaImages } from "react-icons/fa6";
import Footer from "../Footer";

function FourthSection() {
  return (
    <section>
      <h1>Availability and Media</h1>
      <p>
        Select the date your property will be available for rent and showcase it
        with captivating media. A great presentation sets the stage for a
        successful sale.
      </p>
      <br />
      <div>
        <div className="house-listing-input">
          <label>Date Available</label>
          <span>
            <input type="text" placeholder="Enter property" />
            {/*<CiSearch size={20} />*/}
          </span>
        </div>
        <br />
        <div className="house-listing-input">
          <label>Media</label>
        </div>
        <div className="house-listing-img">
          <center>
            <span>
              <FaImages size={40} />
              <small>
                Drag or <span style={{ color: "blue" }}>upload</span>
                Images or videos
              </small>
            </span>
          </center>
          <center></center>
        </div>
      </div>
      <Footer func={() => alert("Done")} />
    </section>
  );
}

export default FourthSection;
