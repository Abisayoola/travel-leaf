import React, { useEffect, useState } from "react";
import "./House.css";

function House() {
  const [house, setHouse] = useState([]);

  useEffect(() => {
    fetch("https://travel-leaf-apis.onrender.com/house")
      .then((res) => res.json())
      .then((data) => setHouse(data.houses))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {house?.map((value, index) => {
        console.log(value);
        return (
          <div className="house-container">
            <img src={value?.avatar?.url} alt="" />
            <h4>{value?.location}</h4>
            <p>{value?.price}</p>
            <p>{value?.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default House;
