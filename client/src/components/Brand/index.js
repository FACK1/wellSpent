import React from "react";
import back from "./back.png";
import "./brand.css";
import axios from "axios";
import Feedback from "../Feedback";
import { RingLoader } from "react-spinners";
import { Link } from "react-router-dom";
import defaultimage from "./x.jpg";

class Brand extends React.Component {
  state = {
    info: [],
    loading: false
  };
  componentDidMount() {
    const { name } = this.props.match.params;
    axios
      .get(`/api/brand/${name}`)
      .then(({ data }) => {
        const info = data[0];
        this.setState({
          image: info.Image ? info.Image[0].thumbnails.large.url : defaultimage,
          name: info["BrandName"],
          overallscore: info["OverallScore"],
          environmentscore: info["EnvironmentScore"],
          labourscore: info["LaborScore"] || "-",
          animalrightscore: info["Animal Rights Score"] || "-",
          cost: info["Cost"] || "-",
          producttype: info["Category Name"] || "-",
          explanation: info["Explanation"] || "Not available",
          AnimalRightshexa: info["Animal Rights hexa"],
          EnvironmentScorehexa: info["Environment Score hexa"]
            ? info["Environment Score hexa"][0]
            : "#D3D3D3",
          LabourScorehexa: info["Labour Score hexa"]
            ? info["Labour Score hexa"][0]
            : "#D3D3D3",
          OverallScorehexa: info["Overall Score hexa"]
            ? info["Overall Score hexa"][0]
            : "#D3D3D3",
          loading: true
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
      environmentscore,
      animalrightscore,
      cost,
      producttype,
      explanation,
      AnimalRightshexa,
      EnvironmentScorehexa,
      LabourScorehexa,
      OverallScorehexa,
      loading
    } = this.state;

    if (loading) {
      return (
        <div className="root">
          <div className="container">
            <Link to="/Brands">
              <img className="backimages" src={back} alt="img" />
            </Link>
            <p className="pargraph"> Brand Details </p>
          </div>
          {image !== undefined ? (
            <img className="images" src={image[0].url} alt="" />
          ) : (
            <img className="images" src={defaultimage} alt="" />
          )}

          <h3 className="brandname">{name || "-"}</h3>

          <div className="ALLdetails">
            <div className="overall">
              <div
                className="score"
                style={{ "background-color": `${OverallScorehexa}` }}
              >
                <h3>OverallScore</h3>
                <h3 className="os">{overallscore || "0"} </h3>
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
                  <h3> {environmentscore || "0"}</h3>
                  <h3>Enviorment Score</h3>
                </div>
              </div>
              <div className="animal">
                <div
                  className="score3"
                  style={{ "background-color": `${AnimalRightshexa}` }}
                >
                  <h3> {animalrightscore || "0"}</h3>
                  <h3>Animal Right Score </h3>
                </div>
              </div>
            </div>
            <div className="more">
              <p> Cost:{cost}</p>
              <p> ProductType:{producttype || "-"}</p>
              <p>Explanation :{explanation || "no"}</p>
            </div>
          </div>
          <div className="MoreDetails">
            <div className="labour2">
              <div
                className="score22"
                style={{ "background-color": `${LabourScorehexa}` }}
              >
                <h3> {labourscore || "0"}</h3>
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
                <h3> {environmentscore || "0"}</h3>
              </div>
              <h3 className="name2">EnvironmentScore </h3>
            </div>
            <p>The last six epsoides of catastrople are not unlike.</p>
          </div>
          <Feedback name={name} />
        </div>
      );
    } else {
      return (
        <div className="sweet-loading">
          <RingLoader
            color={"#1389A6"}
            align-items={"center"}
            text-align={"center"}
          />
        </div>
      );
    }
  }
}

export default Brand;
