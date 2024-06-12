import React, { useEffect, useRef, useState } from "react";
import "./listproperty.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer.js";

function Listproperty() {
  const [text, setText] = useState("Select Option");
  const [tuggle, setTuggle] = useState(false);
  const ulRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (tuggle) {
      ulRef.current.style.height = "300px";
    } else {
      ulRef.current.style.height = 0;
    }
  }, [tuggle]);

  useEffect(() => {
    if (text === "House") {
      navigate(`../../houselisting/${1}`);
    } else if (text === "Car") {
      navigate(`../../houselisting/${1}`);
    } else if (text === "Yacht") {
      navigate(`../../houselisting/${1}`);
    }
  }, [text, navigate]);

  return (
    <div className="list-property-con">
      <div className="list-property">
        <section>
          <h1>What do you want to host?</h1>
          <br />
          <p>
            Do you want to host your house, yacht or vehicl? select your option
            below
          </p>
          <br />
          <span>Category</span>
          <div className="listing-dropdown" onClick={() => setTuggle(!tuggle)}>
            <p>{text}</p>
            <IoMdArrowDropdown size={20} />
          </div>
          <ul ref={ulRef}>
            <li onClick={() => setText("House")}>House</li>
            <li onClick={() => setText("Car")}>Car</li>
            <li onClick={() => setText("Yacht")}>Yacht</li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Listproperty;
