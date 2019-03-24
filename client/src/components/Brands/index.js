import React, { Component } from "react";
import "./brands.css";
// import axios from "axios";

class Brands extends Component {
  state = {
    loading: false
  };

  // componentDidMount() {
  //   axios
  //     .get("/brands")
  //     .then(({ data }) => {
  //       const brands = data.map(brands => {
  //         return {
  //           id: brands.id,
  //           image_url: brands.imge,
  //           name: brands.name
  //         };
  //       });
  //       this.setState({
  //         brands,
  //         loading: true
  //       });
  //     })
  //     .catch(() => {
  //       const { history } = this.props;
  //       history.push("/error");
  //     });
  // }

  render() {
    let Brands = this.state.brands;
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
