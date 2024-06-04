import "./searchItem.css";
import img from "../../assets/siImg.png";
import star from "../../assets/Star 11.png";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src={img} alt="" className="siImg" />
      <div className="siDesc">
        <span className="siSubtitle">
          Apartment - 7 min walk to Las Agujas Beach
        </span>
        <h1 className="siTitle">
          Cosy apartment with private swimming pool in Corralejo
        </h1>
        <span className="siDistance">Sleeps 3 - 1 bedroom - 1 bathroom</span>

        <div className="siDetails">
          <div className="siRatingcontainer">
            <span className="siDistance">Available till Nov 6</span>
            <div className="siRating">
              <img alt="" src={star} />
              <span className="siTaxiOp">5.0</span>{" "}
              <span className="siDistance">(2,673)</span>
            </div>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$259</span>
            <span className="siTaxOp">per night</span>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
