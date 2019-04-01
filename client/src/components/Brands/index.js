import React, { Component } from "react";
import "./brands.css";
import axios from "axios";
import { RingLoader } from "react-spinners";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
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
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { Name } = this.state;
    axios
      .post("/brand", { Name })
      .then(({ data: { success } }) => {
        if (success) {
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
                    <form className="form" onSubmit={this.handleSubmitForm}>
                      <h3> Suggest a brand</h3>
                      <div className="div-label">
                        <label className="label" for="pop">
                          brand name
                        </label>
                        <input
                          className="login-input"
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

          {brands.length !== 0 ? (
            brands.map(brand => {
              letters.push(brand.Name.charAt(0));
              return (
                <div>
                  {letters.filter(char => char === brand.Name.charAt(0))
                    .length === 1 && (
                    <div className="diva">
                      <div className="par3">{brand.Name.charAt(0)}</div>
                    </div>
                  )}
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
