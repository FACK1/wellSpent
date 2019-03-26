import React, { Component } from "react";
import "./brands.css";
import axios from "axios";

class Brands extends Component {
  state = {};
  componentDidMount() {
    axios
      .get(`/brands`)
      .then(({ data }) => {
        this.setState({
          name: data.name,
          overallscore: data.overallscore,
          enviormentscore: data.enviormentscore,
          labourscore: data.labourscore,
          discription: data.discription
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const {
      name,
      overallscore,
      labourscore,
      enviormentscore,
      discription
    } = this.state;
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
            <p className="name">{name}</p>
            <p className="description">{discription}</p>
            <button className="view">view</button>
          </div>
          <div className="scrol">
            <div className="scrol1">
              {overallscore} <br /> overallscore
            </div>
            <div className="scrol2">
              {labourscore} <br /> labourscore
            </div>
            <div className="scrol3">
              {enviormentscore} <br /> enviormentscore
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Brands;
