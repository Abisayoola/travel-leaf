import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const SecondSection = () => {
  const navigate = useNavigate();
  return (
    <section>
      <h1>Tell us about your property</h1>
      <p>
        Share the unique details and features of your property. The better you
        describe it, the easier it will be for potential buyers to fall in love.
      </p>
      <br />
      <div className="house-listing-description">
        <span>Describe your property</span>
        <textarea placeholder="Already have a description? paste it here" />
      </div>
      <Footer func={() => navigate(`../../houselisting/${3}`)} />
    </section>
  );
};

export default SecondSection;
