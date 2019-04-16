import React from "react";
import back from "./back.png";
import "./brand.css";
import axios from "axios";
import Feedback from "../Feedback";
import { FadeLoader } from "react-spinners";
import { Link } from "react-router-dom";
import defaultimage from "./x.jpg";
import AddFeedback from "../Feedback/add.js";

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
          transparencyscore: info.TransparencyScore || "0",
          cost: info["Cost"] || "-",
          producttype: info.category || "-",
          explanation: info["Explanation"] || "-",
          TransparencyScorehexa: colourMap
            ? colourMap[info.TransparencyScore]
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
      TransparencyScorehexa,
      labourscore,
      transparencyscore,
      environmentscore,
      cost,
      producttype,
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

        <div className="big-box">
          <div className="div-box">
            <div className="imge">
              <img className="img-get" src={image} alt="" />
            </div>
            <div className="descrip">
              <p className="name">{name || "-"}</p>
              <p className="description">
                {explanation || "No-Explanation "}
              </p>
            </div>
            <div className="scrol">
              <div className="OverallScore-brands-Overall">
                <div
                  className="scrol1"
                  style={{
                    "background-color": `${OverallScorehexa}`
                  }}
                >
                  {overallscore || "0"} <br />
                </div>

                <p className="ooo">Overall Rating</p>
              </div>
              <div className="OverallScore-brands-Environment">
                <div
                  className="scrol3"
                  style={{
                    "background-color": `${EnvironmentScorehexa}`
                  }}
                >
                  {environmentscore || "0"} <br />
                </div>
                <p className="ooo">Labour Rating</p>
              </div>
              <div className="OverallScore-brands">
                <div
                  className="scrol2"
                  style={{
                    "background-color": `${LabourScorehexa}`
                  }}
                >
                  {labourscore || "0"} <br />
                </div>
                <p className="ooo"> Environment Rating</p>
              </div>
              <div className="brands-trans">
                <div
                  className="scrol3"
                  style={{
                    "background-color": `${TransparencyScorehexa}`
                  }}
                >
                  {transparencyscore || "0"} <br />
                </div>
                <p className="ooo"> Transparency Rating</p>
              </div>
            </div>
          </div>
          <div className="div-margin-bottm" />
        </div>
        <div className="details-feedback-container">
<div className="score-reasons">
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
    <h3 className="name2">LabourRating </h3>
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


</div>
<div className="feedback-section">
  <Feedback name={name} />
</div>
</div>
<AddFeedback name={name} />
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
