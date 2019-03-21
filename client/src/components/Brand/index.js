import React from "react";
import imageback from "./image.png";
import brand from "./Rectangle.png";
import "./brand.css";

class Brand extends React.Component {
  render() {
    return (
      <div className="root">
        <div className="container">
          <img className="back" src={imageback} alt="img" />
          <p className="pargraph"> Brand Details </p>
        </div>
        <div className="image">
          <img className="images" src={brand} alt="img" />
        </div>
        <div className="name">
          <h3>Zara</h3>
        </div>
        <div className="details" />
        <div className="overall">
          <div className="score">
            <h3>95 </h3>
            <h3>OverallScore </h3>
          </div>
        </div>
        <div className="detail">
          <div className="labour">
            <div className="score1">
              <h3>100 LabourScore</h3>
            </div>
          </div>
          <div className="enviorment">
            <div className="score2">
              <h3>88 EnviormentScore</h3>
            </div>
          </div>
          <div className="animal">
            <div className="score3">
              <h3>70 AnimalRightScore</h3>
            </div>
          </div>
        </div>
        <div className="more">
          <h3> Cost:10</h3>
          <h3> ProductType:Socided Anonima</h3>
          <h3>Explanation :The got a ranking of A for transparency</h3>
        </div>
      </div>
    );
  }
}

export default Brand;
