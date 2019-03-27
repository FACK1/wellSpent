import React, { Component } from "react";
import "./brands.css";
import axios from "axios";
import { RingLoader } from "react-spinners";
import { Link } from "react-router-dom";
class Brands extends Component {
  state = { loading: false };

  componentDidMount() {
    axios
      .get(`/brands`)
      .then(({ data }) => {
        this.setState({
          brands: data,
          loading: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { loading, brands } = this.state;
    console.log('brands',brands);
    if (loading) {
      const sortedArray = brands.sort(function (a, b) {
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0;
          });
          console.log('sortedArray',sortedArray);
          const letters = ['A','B','C','D','Z'];
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

          {brands.length !== 0 ? (
            brands.map(brand => {
              return (
                <div>
                { letters.length !== 0 ? (
                  letters.map(letter =>{
                     if (letter === brand.Name.charAt(0)){
                    return  ( <div className="diva">
                         <div className="par3">{letter}</div>
                       </div>)
                     }
                  })) : <div> </div>
                 }

                <div className="div-box">
                  <div className="imge">
                    <img
                      className="img-get"
                      src={brand.Image[0].thumbnails.large.url}
                      alt=""
                    />
                  </div>
                  <div className="descrip">
                    <p className="name">{brand.Name}</p>
                    <p className="description">{brand.Explanation}</p>
                    <Link to={`/Brand/${brand.Name}`} className="button-link">
                      <button className="view">view</button>
                    </Link>
                  </div>
                  <div className="scrol">
                    <div
                      className="scrol1"
                      style={{
                        "background-color": `${brand.OverallScoreColour[0]}`
                      }}
                    >
                      {brand.OverallScore} <br /> overall score
                    </div>
                    <div
                      className="scrol2"
                      style={{
                        "background-color": `${brand.LabourScoreColour[0]}`
                      }}
                    >
                      {brand.LaborScore} <br /> labour score
                    </div>
                    <div
                      className="scrol3"
                      style={{
                        "background-color": `${brand.EnvironmentScoreColour[0]}`
                      }}
                    >
                      {brand.EnvironmentScore} <br /> enviorment score
                    </div>
                  </div>
                </div>
                </div>
              );
            })
          ) : (
            <RingLoader color={"#ff8094"} loading={loading} />
          )}
        </div>
      );
    } else {
      return (
        <div className="sweet-loading">
          <RingLoader color={"#ff8094"} loading={loading} />
        </div>
      );
    }
  }
}

export default Brands;
