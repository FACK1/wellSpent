import React from "react";
import back from "./left.png";
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
          ReasonForEnvironmentScore:
            info["Reason for Environment Score"] || "No Result",
          labourscore: info["LaborScore"] || "0",
          ReasonForLabourScore: info["Reason for Labour Score"] || "No Result",
          transparencyscore: info.TransparencyScore || "0",
          ReasonForTransparencyScore:
            info["Reason for Transparency Score"] || "No Result",
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
      ReasonForEnvironmentScore,
      ReasonForLabourScore,
      ReasonForTransparencyScore,
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
            <p className="pargraph-Brand-Details"> Brand Details </p>
          </div>
          <div className="big-box-brand">
            <div className="div-box-brand">
              <div className="imge-brand">
                <img className="img-get" src={image} alt="" />
              </div>
              <div className="descrip-brand">
                <p className="name-brand">{name || "-"}</p>
                <p className="description-brand">
                  {explanation || "No-Explanation "}
                </p>
                <div className="atrbute">
                  <div className="prototype">producttype:{producttype}</div>
                  <div className="cost">cost:{cost}</div>
                </div>
              </div>
              <div className="scrol-brand">
                <div className="OverallScore-brands-Overall-brand">
                  <div
                    className="scrol1-brand"
                    style={{
                      "background-color": `${OverallScorehexa}`
                    }}
                  >
                    {overallscore || "0"} <br />
                  </div>

                  <p className="ooo">Overall Rating</p>
                </div>
                <div className="OverallScore-brands-brand">
                  <div
                    className="scrol2-brand"
                    style={{
                      "background-color": `${EnvironmentScorehexa}`
                    }}
                  >
                    {environmentscore || "0"} <br />
                  </div>
                  <p className="ooo">Environment Rating</p>
                </div>
                <div className="OverallScore-brands-Environment-brand">
                  <div
                    className="scrol3-brand"
                    style={{
                      "background-color": `${LabourScorehexa}`
                    }}
                  >
                    {labourscore || "0"} <br />
                  </div>
                  <p className="ooo">Labour Rating</p>
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
                      "background-color": `${EnvironmentScorehexa}`
                    }}
                  >
                    <h3> {environmentscore}</h3>
                  </div>
                  <h3 className="name2">Environment Rating </h3>
                </div>
                <div className="pargrah-brand">
                  <p className="They-areas-they-are">
                    {ReasonForEnvironmentScore}
                  </p>
                </div>
                <div className="labour2">
                  <div
                    className="score22"
                    style={{
                      "background-color": `${LabourScorehexa}`
                    }}
                  >
                    <h3> {labourscore}</h3>{" "}
                  </div>
                  <h3 className="name2">Labour Rating </h3>
                </div>
                <div className="pargrah-brand">
                  <p className="They-areas-they-are">{ReasonForLabourScore}</p>
                  <div className="labour2">
                    <div
                      className="score22"
                      style={{
                        "background-color": `${TransparencyScorehexa}`
                      }}
                    >
                      <h3> {transparencyscore}</h3>
                    </div>
                    <h3 className="name2">Transparency Rating </h3>
                  </div>
                  <p className="They-areas-they-are">
                    {ReasonForTransparencyScore}
                  </p>
                </div>
                <Link to="/methodology">
                  <div className="btn-metodolegy-brand">
                    {" "}
                    Find out more about now we score
                  </div>
                </Link>
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
