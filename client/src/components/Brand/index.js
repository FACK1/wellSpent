import React from "react";
import back from "./back.png";
import "./brand.css";
import axios from "axios";
import Feedback from "../Feedback";

class Brand extends React.Component {
  state = {
    info: []
  };
  componentDidMount() {
    const { Name } = this.props.match.params;
    axios
      .get(`/brand/${Name}`)
      .then(({ data }) => {
        const info = data[0];
        this.setState({
          image: info.Image[0].url,
          name: info["Name"],
          overallscore: info["OverallScore"],
          enviormentscore: info["EnvironmentScore"],
          labourscore: info["LaborScore"],
          animalrightscore: info["Animal Rights Score"],
          cost: info["Cost"],
          producttype: info["Category Name"],
          explanation: info["Explanation"],
          AnimalRightshexa: info["Animal Rights hexa"],
          EnvironmentScorehexa: info["Environment Score hexa"],
          LabourScorehexa: info["Labour Score hexa"],
          OverallScorehexa: info["Overall Score hexa"]
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
      explanation,
      AnimalRightshexa,
      EnvironmentScorehexa,
      LabourScorehexa,
      OverallScorehexa
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
          <div
            className="score"
            style={{ "background-color": `${OverallScorehexa}` }}
          >
            <h3>OverallScore</h3>
            <h3 className="os">{overallscore} </h3>
          </div>
        </div>
        <div className="detail">
          <div className="labour">
            <div
              className="score1"
              style={{ "background-color": `${LabourScorehexa}` }}
            >
              <h3> {labourscore}</h3>
              <h3>Labour Score </h3>
            </div>
          </div>
          <div className="enviorment">
            <div
              className="score2"
              style={{ "background-color": `${EnvironmentScorehexa}` }}
            >
              <h3> {enviormentscore}</h3>
              <h3>Enviorment Score</h3>
            </div>
          </div>
          <div className="animal">
            <div
              className="score3"
              style={{ "background-color": `${AnimalRightshexa}` }}
            >
              <h3> {animalrightscore}</h3>
              <h3>Animal Right Score </h3>
            </div>
          </div>
        </div>
        <div className="more">
          <h3> Cost:{cost}</h3>
          <h3> ProductType:{producttype}</h3>
          <h3>Explanation :{explanation}</h3>
        </div>
        <div className="MoreDetails">
          <div className="labour2">
            <div
              className="score22"
              style={{ "background-color": `${LabourScorehexa}` }}
            >
              <h3> {labourscore}</h3>
            </div>
            <h3 className="name2">LabourScore </h3>
          </div>
          <p>
            They are as they are , and their merceills candorwill be missed.
          </p>
          <div className="labour2">
            <div
              className="score22"
              style={{ "background-color": `${EnvironmentScorehexa}` }}
            >
              <h3> {enviormentscore}</h3>
            </div>
            <h3 className="name2">EnvironmentScore </h3>
          </div>
          <p>The last six epsoides of catastrople are not unlike.</p>
        </div>
        <Feedback />
      </div>
    );
  }
}

export default Brand;
