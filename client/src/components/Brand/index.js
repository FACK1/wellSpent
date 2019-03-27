import React from "react";
import back from "./back.png";
import "./brand.css";
import axios from "axios";

class Brand extends React.Component {
  state = {
    info: [],
    image: "",
    name: "",
    overallscore: "",
    enviormentscore: "",
    labourscore: "",
    animalrightscore: "",
    cost: "",
    producttype: "",
    explanation: ""
  };
  componentDidMount() {
    const name = "Chanel";
    axios
      .get(`brand/${name}`)
      .then(({ data }) => {
        this.state.info = data[0];
        this.setState({
          image: data[0].Image[0].url,
          name: data[0].Name,
          overallscore: data[0].OverallScore,
          enviormentscore: data[0].EnvironmentScore,
          labourscore: data[0].LaborScore,
          animalrightscore: data[0].AnimalRightsScore,
          cost: data[0].Cost,
          producttype: data[0].CategoryName,
          explanation: data[0].Explanation,
          info: data[0],
          environmentScoreColour: data[0].EnvironmentScoreColour
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const {
      image,
      name,
      overallscore,
      labourscore,
      enviormentscore,
      animalrightscore,
      cost,
      producttype,
      explanation
    } = this.state;

    return (
      <div className="root">
        <div className="container">
          <img className="backimages" src={back} alt="img" />
          <p className="pargraph"> Brand Details </p>
        </div>
        <div className="image">
          <img className="images" src={image} alt="img" />
        </div>
        <div className="name">
          <h3>{name}</h3>
        </div>
        <div className="details" />
        <div className="overall">
          <div className="score">
            <h3>OverallScore</h3>
            <h3>{overallscore} </h3>
          </div>
        </div>
        <div className="detail">
          <div className="labour">
            <div className="score1">
              <h3>LabourScore</h3>
              <h3>{this.state.labourscore}</h3>
            </div>
          </div>
          <div className="enviorment">
            <div className="score2" style={{"background-color":`${EnvironmentScoreColour}`}>
              <h3>EnviormentScore</h3>
              <h3>{this.state.enviormentscore}</h3>
            </div>
          </div>
          <div className="animal">
            <div className="score3">
              <h3>AnimalRightScore</h3>
              <h3>{this.state.animalrightscore}</h3>
            </div>
          </div>
        </div>
        <div className="more">
          <h3> Cost:{this.state.cost}</h3>
          <h3> ProductType:{this.state.producttype}</h3>
          <h3>Explanation :{this.state.explanation}</h3>
        </div>
      </div>
    );
  }
}

export default Brand;
