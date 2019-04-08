import React from "react";
import "../brands.css";
import { Link } from "react-router-dom";

const BrandItem = ({
  nameCapitalized,
  name,
  image,
  explanation,
  overallScore,
  overallScoreColour,
  labourScore,
  labourScoreColour,
  environmentScore,
  environmentScoreColour
}) => (
  <div className="div-box">
    <div className="imge">
      <img className="img-get" src={image} alt="" />
    </div>

    <div className="descrip">
      <p className="name">{nameCapitalized}</p>
      <p className="description">{explanation}</p>
      <div className="div-button">
        <Link to={`/Brand/${name}`} className="button-link">
          <button className="view">view</button>
        </Link>
      </div>
    </div>
    <div className="scrol">
      <div
        className="scrol1"
        style={{
          "background-color": `${overallScoreColour}`
        }}
      >
        {overallScore} <br /> Overall score
      </div>
      <div
        className="scrol2"
        style={{
          "background-color": `${labourScoreColour}`
        }}
      >
        {labourScore} <br /> Labour score
      </div>
      <div
        className="scrol3"
        style={{
          "background-color": `${environmentScoreColour}`
        }}
      >
        {environmentScore} <br /> Environment score
      </div>
    </div>
  </div>
);

export default BrandItem;
