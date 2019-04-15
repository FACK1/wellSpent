import React, { Component } from "react";
import "./brands.css";
import axios from "axios";
import { RingLoader } from "react-spinners";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import defaultimage from "../Brand/x.jpg";
class Brands extends Component {
  state = {
    loading: false,
    error: null,
    value: ""
  };
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  componentDidMount() {
    axios
      .get(`/api/brands`)
      .then(({ data }) => {
        console.log('result',data.result);
        console.log('colourMap', data.colourMap);
        this.setState({
          brands: data.result,
          colourMap: data.colourMap,
          loading: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { BrandName, Email, MoreInformation } = this.state;
    axios
      .post("/api/brand", { BrandName, Email, MoreInformation })
      .then(({ data: { success } }) => {
        if (success) {
          alert("Thank you for your suggestion");
          window.location.reload();
        } else {
          console.log("error");
        }
      })
      .catch(error => {
        this.setState({ error: error.response.data.error });
      });
  };
  handleSubmitForm = event => {
    event.preventDefault();
  };
  openModal = () => {
    this.setState({ open: true });
  };
  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { loading, brands, colourMap } = this.state;
    if (loading) {
      const letters = [];
      return (
        <div className="all">
          <div className="div1">
            <div className="div10">
              <Link to="/">
                <div className="back" />
              </Link>
              <div className="par"> Brands</div>
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
                    <form className="form" onSubmit={this.handleSubmitForm}>
                      <h3> Suggest a brand</h3>
                      <div className="div-label">
                        <p className="if-we-are">
                          if we are missing a brand that you want to see ,<br />
                          lets us know, and we will try and add it as soon as we
                          can.
                        </p>
                        <div className="label-div">
                          <div className="label-input-brand-name">
                            <label className="label-brand-name" for="pop">
                              brand name
                            </label>
                            <input
                              className="name-input"
                              type="text"
                              name="BrandName"
                              value={this.state.value}
                              onChange={this.handleChange}
                            />
                          </div>
                          <br />
                          <label className="label-brand-name" for="pop">
                            your email(optinal)
                          </label>
                          <input
                            className="name-input"
                            type="text"
                            name="Email"
                            value={this.state.value}
                            onChange={this.handleChange}
                          />
                          <br />
                          <p className="so-we-can">
                            (so we can let you know when we have added the brand
                            you suggested)
                          </p>
                          <br />
                          <label className="label-brand-name" for="pop">
                            Any other information we should now
                          </label>
                          <br />
                          <input
                            className="informationinput"
                            type="text"
                            name="MoreInformation"
                            value={this.state.value}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <br />
                      <button className="btn1" onClick={this.handleClick}>
                        Submit
                      </button>
                    </form>
                  </div>
                </Popup>
              </div>

              <div className="par2"> Suggest a brand </div>
            </div>
          </div>
          <div className="a-z">
            A B C D E F G H I J K L M N O P Q R S V W X Y Z
          </div>

          {brands.length !== 0 ? (
            brands.map(brand => {
              const nameCapitalized =
                brand.BrandName.charAt(0).toUpperCase() +
                brand.BrandName.slice(1);
              const OverallScoreColour = colourMap[brand.OverallScore]
                ? colourMap[brand.OverallScore]
                : "#CCCCCF";
              const LabourScoreColour = colourMap[brand.LaborScore]
                ? colourMap[brand.LaborScore]
                : "#CCCCCF";
              const EnvironmentScoreColour = colourMap[brand.EnvironmentScore]
                ? colourMap[brand.EnvironmentScore]
                : "#CCCCCF";
              const AnimalRightsScore = colourMap[brand.AnimalRightsScore]
                ? colourMap[brand.AnimalRightsScore]
                : "#CCCCCF";
              const image = brand.Image
                ? brand.Image[0].thumbnails.large.url
                : defaultimage;
              letters.push(nameCapitalized.charAt(0));

              return (
                <div className="big-box">
                  {letters.filter(char => char === nameCapitalized.charAt(0))
                    .length === 1 && (
                    <div className="diva">
                      <div className="par3">{nameCapitalized.charAt(0)}</div>
                    </div>
                  )}
                  <div className="div-box">
                    <div className="imge">
                      <img className="img-get" src={image} alt="" />
                    </div>
                    <div className="descrip">
                      <p className="name">{nameCapitalized || "-"}</p>
                      <p className="description">
                        {brand.Explanation || "No-Explanation "}
                      </p>
                      <div className="div-button">
                        <Link
                          to={`/Brand/${brand.BrandName}`}
                          className="button-link"
                        >
                          <button className="view">More details</button>
                        </Link>
                      </div>
                    </div>
                    <div className="scrol">
                      <div className="OverallScore-brands-Overall">
                        <div
                          className="scrol1"
                          style={{
                            "background-color": `${OverallScoreColour}`
                          }}
                        >
                          {brand.OverallScore || "0"} <br />
                        </div>

                        <p className="ooo">Overall score</p>
                      </div>
                      <div className="OverallScore-brands">
                        <div
                          className="scrol2"
                          style={{
                            "background-color": `${LabourScoreColour}`
                          }}
                        >
                          {brand.LaborScore || "0"} <br />
                        </div>
                        <p className="ooo">Labour score</p>
                      </div>
                      <div className="OverallScore-brands-Environment">
                        <div
                          className="scrol3"
                          style={{
                            "background-color": `${EnvironmentScoreColour}`
                          }}
                        >
                          {brand.EnvironmentScore || "0"} <br />
                        </div>
                        <p className="ooo"> Environment score</p>
                      </div>

                      <div className="brands-AnimalRigh">
                        <div
                          className="scrol3"
                          style={{
                            "background-color": `${AnimalRightsScore}`
                          }}
                        >
                          {brand.AnimalRightsScore || "0"} <br />
                        </div>
                        <p className="ooo"> Animal Rights</p>
                      </div>
                    </div>
                  </div>
                  <div className="div-margin-bottm" />
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
          <RingLoader color={"#1389a6"} loading={loading} />
        </div>
      );
    }
  }
}

export default Brands;
