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
    value: "",
    open: false
  };
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  componentDidMount() {
    axios
      .get(`/api/brands`)
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
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { BrandName } = this.state;
    axios
      .post("/api/brand", { BrandName })
      .then(({ data: { success } }) => {
        if (success) {
          alert("Your suggestion added successfully, Thanks!");
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
    const { loading, brands } = this.state;
    if (loading) {
      const letters = [];
      return (
        <div className="all">
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
                    <form className="form" onSubmit={this.handleSubmitForm}>
                      <h3> Suggest a brand</h3>
                      <div className="div-label">
                        <label className="label" for="pop">
                          brand name
                        </label>
                        <input
                          className="name-input"
                          type="text"
                          name="Name"
                          value={this.state.value}
                          onChange={this.handleChange}
                        />
                      </div>
                      <br />
                      <button className="btn1" onClick={this.handleClick}>
                        add
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
              const OverallScoreColour = brand.OverallScoreColour
                ? brand.OverallScoreColour[0]
                : "#808080";
              const LabourScoreColour = brand.LabourScoreColour
                ? brand.LabourScoreColour[0]
                : "#808080";
              const EnvironmentScoreColour = brand.EnvironmentScoreColour
                ? brand.EnvironmentScoreColour[0]
                : "#808080";
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
                    {brand.Image !== undefined ? (
                      <div className="imge">
                        <img
                          className="img-get"
                          src={brand.Image[0].thumbnails.large.url}
                          alt=""
                        />
                      </div>
                    ) : (
                      <div className="imge">
                        <img className="img-get" src={defaultimage} alt="" />
                      </div>
                    )}

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
                      <div className="OverallScore-brands">
                        <div
                          className="scrol1"
                          style={{
                            "background-color": OverallScoreColour
                          }}
                        >
                          {brand.OverallScore} <br />
                        </div>

                        <p className="ooo">Overall score</p>
                      </div>
                      <div className="OverallScore-brands">
                        <div
                          className="scrol2"
                          style={{
                            "background-color": LabourScoreColour
                          }}
                        >
                          {brand.LaborScore} <br />
                        </div>
                        <p className="ooo">Labour score</p>
                      </div>
                      <div className="OverallScore-brands">
                        <div
                          className="scrol3"
                          style={{
                            "background-color": EnvironmentScoreColour
                          }}
                        >
                          {brand.EnvironmentScore || "0"} <br />
                        </div>
                        <p className="ooo"> Environment score</p>
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
          <RingLoader color={"#1389a6"} loading={loading} />
        </div>
      );
    }
  }
}

export default Brands;
