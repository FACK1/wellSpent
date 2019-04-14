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
                            (so we can let you know when we've added the brand
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

          {brands.length !== 0 ? (
            brands.map(brand => {
              const nameCapitalized =
                brand.BrandName.charAt(0).toUpperCase() +
                brand.BrandName.slice(1);
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
                      <p className="name">{nameCapitalized}</p>
                      <p className="description">{brand.Explanation}</p>
                      <div className="div-button">
                        <Link
                          to={`/Brand/${brand.BrandName}`}
                          className="button-link"
                        >
                          <button className="view">view</button>
                        </Link>
                      </div>
                    </div>
                    <div className="scrol">
                      <div
                        className="scrol1"
                        style={{
                          "background-color": `${colourMap[brand.OverallScore]}`
                        }}
                      >
                        {brand.OverallScore} <br /> Overall score
                      </div>
                      <div
                        className="scrol2"
                        style={{
                          "background-color": `${colourMap[brand.LaborScore]}`
                        }}
                      >
                        {brand.LaborScore} <br /> Labour score
                      </div>
                      <div
                        className="scrol3"
                        style={{
                          "background-color": `${
                            colourMap[brand.EnvironmentScore]
                          }`
                        }}
                      >
                        {brand.EnvironmentScore} <br /> Environment score
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
