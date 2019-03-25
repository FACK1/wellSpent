import React from "react";
import imageback from "./image.png";
import "./brand.css";
import image from "./Rectangle.png";
import axios from "axios";

class Brand extends React.Component {
  state = {
    loading: false
  };
  componentDidMount() {
    const id = 1;
    axios
      .get(`/brand/${id}`)
      .then(({ data }) => {
        this.setState({
          name: data.name,
          overallscore: data.overallscore,
          enviormentScore: data.enviormentscore,
          labourscore: data.labourscore,
          animalrightscore: data.animalrightscore,
          cost: data.cost,
          producttype: data.producttype,
          explanation: data.explanation,
          loading: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const {
      name,
      overallScore,
      labourScore,
      loading,
      enviormentscore,
      animalrightscore,
      cost,
      producttype,
      explanation
    } = this.state;
    if (loading) {
      return (
        <div className="root">
          <div className="container">
            <img className="back" src={imageback} alt="img" />
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
              <h3>{overallScore} </h3>
            </div>
          </div>
          <div className="detail">
            <div className="labour">
              <div className="score1">
                <h3>LabourScore</h3>
                <h3>{labourScore}</h3>
              </div>
            </div>
            <div className="enviorment">
              <div className="score2">
                <h3>EnviormentScore</h3>
                <h3>{enviormentscore}</h3>
              </div>
            </div>
            <div className="animal">
              <div className="score3">
                <h3>AnimalRightScore</h3>
                <h3>{animalrightscore}</h3>
              </div>
            </div>
          </div>
          <div className="more">
            <h3> Cost:{cost}</h3>
            <h3> ProductType:{producttype}</h3>
            <h3>Explanation :{explanation}</h3>
          </div>
        </div>
      );
    } else {
      return <div>loading </div>;
    }
  }
}

export default Brand;
