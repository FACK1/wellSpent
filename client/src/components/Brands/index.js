import React, { Component } from "react";
import "./brands.css";
import axios from "axios";
import { RingLoader } from "react-spinners";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
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

  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }

  render() {
    const { loading, brands } = this.state;
    console.log('brands',brands);
    if (loading) {
      const letters = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ];
      return (
        <div>
          <div className="div1">
            <div className="div10">
              <Link to="/">
                <div className="back" />
              </Link>
              <div className="par">Ethical Brands</div>
            </div>
            <div className="div11">
              <div className="div-pop">
                <div className="add" onClick={this.openModal} />
                <Popup
                  open={this.state.open}
                  closeOnDocumentClick
                  onClose={this.closeModal}
                >
                  <div className="modal">
                    <a className="close" onClick={this.closeModal}>
                      &times;
                    </a>
                    <form className="form">
                      <h3> Suggest a brand</h3>
                      <div className="div-label">
                        <label className="label" for="pop">
                          brand name
                        </label>
                        <input
                          className="login-input"
                          type="text"
                          name="name"
                        />
                      </div>
                      <br />
                      <button className="btn1">add</button>
                    </form>
                  </div>
                </Popup>
              </div>

              <div className="par2"> Suggest a brand </div>
            </div>
          </div>
          {letters.length !== 0 ? (
            letters.map((letter,index) => {
              if(letter)
              return(
                <div>
                  <div className="diva">
                    <div className="par3">{letter}</div>
                  </div>

                { brands.length !== 0 ? (
                  brands.map((brand, i) => {
                    if (letter === brand.Name.charAt(0) ) {
                    return (
                      <div>

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
                                "background-color": `${
                                  brand.EnvironmentScoreColour[0]
                                }`
                              }}
                            >
                              {brand.EnvironmentScore} <br /> enviorment score
                            </div>
                          </div>
                        </div>
                      </div>

                    );
                  }
                  })
                ) : (

                  <RingLoader color={"#ff8094"} loading={loading} />
                )}
                </div>

)
            })
          ) : (
            <div> </div>
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
