import React from "react";
import back from "./back.png";
import "./brand.css";
import axios from "axios";
import Feedback from "../Feedback";
import { FadeLoader } from "react-spinners";
import { Link } from "react-router-dom";
import defaultimage from "./x.jpg";

class Brand extends React.Component {
  state = {
    info: [],
    loading: true
  };
  componentDidMount() {
    const { name } = this.props.match.params;
    axios
      .get(`/api/brand/${name}`)
      .then(({ data }) => {
        const info = data.result[0];
        const { colourMap } = data;
        this.setState({
          image: info.Image ? info.Image[0].thumbnails.large.url : defaultimage,
          name: info["BrandName"] || "-",
          overallscore: info["OverallScore"] || "0",
          environmentscore: info["EnvironmentScore"] || "0",
          labourscore: info["LaborScore"] || "0",
          animalrightscore: info["Animal Rights Score"] || "0",
          cost: info["Cost"] || "-",
          producttype: info["Category Name"] || "-",
          explanation: info["Explanation"] || "-",
          AnimalRightshexa: colourMap
            ? colourMap[info["Animal Rights Score"]]
            : "#CCCCCF",
          EnvironmentScorehexa: colourMap[info.EnvironmentScore]
            ? colourMap[info.EnvironmentScore]
            : "#CCCCCF",
          LabourScorehexa: colourMap[info.LaborScore]
            ? colourMap[info.LaborScore]
            : "#CCCCCF",
          OverallScorehexa: colourMap[info.OverallScore]
            ? colourMap[info.OverallScore]
            : "#CCCCCF",
          loading: false
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
      OverallScorehexa,
      LabourScorehexa,
      EnvironmentScorehexa,
      AnimalRightshexa,
      labourscore,
      environmentscore,
      animalrightscore,
      cost,
      category,
      explanation,
      loading
    } = this.state;

    if (!loading) {
      return (
        <div className="root">
          <div className="container">
            <Link to="/Brands">
              <img className="backimages" src={back} alt="img" />
            </Link>
            <p className="pargraph"> Brand Details </p>
          </div>

          <img className="images" src={image} alt="" />

          <h3 className="brandname">{name}</h3>

          <div className="ALLdetails">
            <div className="overall">
              <div
                className="score"
                style={{
                  "background-color": `${OverallScorehexa}`
                }}
              >
                <h3>OverallRating</h3>
                <h3 className="os">{overallscore} </h3>
              </div>
            </div>
            <div className="detail">
              <div className="labour">
                <div
                  className="score1"
                  style={{
                    "background-color": `${LabourScorehexa}`
                  }}
                >
                  <h3> {labourscore}</h3>
                  <h3>Labour Rating </h3>
                </div>
              </div>
              <div className="enviorment">
                <div
                  className="score2"
                  style={{
                    "background-color": `${EnvironmentScorehexa}`
                  }}
                >
                  <h3> {environmentscore}</h3>
                  <h3>Enviorment Rating</h3>
                </div>
              </div>
              <div className="animal">
                <div
                  className="score3"
                  style={{
                    "background-color": `${AnimalRightshexa}`
                  }}
                >
                  <h3> {animalrightscore}</h3>
                  <h3>Animal Right Rating </h3>
                </div>
              </div>
            </div>
            <div className="more">
              <p> Cost:{cost}</p>
              <p> ProductType: {category}</p>
              <p>Explanation: {explanation}</p>
            </div>
          </div>
          <div className="MoreDetails">
            <div className="labour2">
              <div
                className="score22"
                style={{
                  "background-color": `${LabourScorehexa}`
                }}
              >
                <h3> {labourscore}</h3>
              </div>
              <h3 className="name2">Labour Rating </h3>
            </div>
            <p>
              They are as they are , and their merceills candorwill be missed.
            </p>
            <div className="labour2">
              <div
                className="score22"
                style={{
                  "background-color": `${EnvironmentScorehexa}`
                }}
              >
                <h3> {environmentscore}</h3>
              </div>
              <h3 className="name2">EnvironmentRating </h3>
            </div>
            <p>The last six epsoides of catastrople are not unlike.</p>
          </div>
          <Feedback name={name} />
        </div>
      );
    } else {
      return (
        <div className="sweet-loading">
          <FadeLoader
            color={"black"}
            align-items={"center"}
            text-align={"center"}
          />
        </div>
      );
    }
  }
}

export default Brand;
