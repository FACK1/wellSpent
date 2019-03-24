import React, { Component } from "react";
import "./brands.css";
import addis from "./addis.png";

class Brands extends Component {
  state = {
    loading: false
  };

  render() {
    return (
      <div>
        <div className="div1">
          <div className="div10">
            <div className="back" />
            <div className="par">Ethical Brands</div>
          </div>
          <div className="div11">
            <div className="add" />
            <div className="par2"> Suggest a brand </div>
          </div>
        </div>
        <div className="diva">
          <div className="par3">A</div>
        </div>

        <div className="div-box">
          <div className="imge" />
          <div className="descrip">
            <p className="name">ADDIS</p>
            <p className="description">
              {" "}
              Adidas SA is a Spanish fast fashion retailer based in Arteixo in
              Galicia.
            </p>
            <button className="view">view</button>
          </div>
          <div className="scrol">
            <div className="scrol1">
              {" "}
              95 <br />
              Overall score
            </div>
            <div className="scrol2">
              {" "}
              70 <br />
              Labour score
            </div>
            <div className="scrol3">
              {" "}
              95 <br />
              Enviroment score
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Brands;
