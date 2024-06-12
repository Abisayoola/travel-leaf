import React from "react";
import "../listproperty.css";
import FirstSection from "./FirstSection";
import { useParams } from "react-router-dom";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";

const ListHouse = () => {
  const params = useParams();
  return (
    <div className="list-property-con">
      <div className="list-property">
        {params.section === "1" ? (
          <FirstSection />
        ) : params.section === "2" ? (
          <SecondSection />
        ) : params.section === "3" ? (
          <ThirdSection />
        ) : (
          <FourthSection />
        )}
      </div>
    </div>
  );
};

export default ListHouse;
