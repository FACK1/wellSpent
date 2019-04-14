import React, { Component } from "react";
import "./home.css";
import Autosuggests from "./Autosuggests";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Home extends Component {
  state = {
    info: []
  };
  componentDidMount() {
    axios
      .get("/api/aboutus")
      .then(({ data }) => {
        this.setState({
          info: data[0]
        });
      })
      .catch(() => {
        console.log("Error");
      });
  }

  render() {
    const { info } = this.state;
    return (
      <div className="main">
        <div>
          <h1>Well Spent</h1>
          <h2>Helping you to make your shop more ethical</h2>
        </div>
        <div className="main-2">
          <Autosuggests />
          <Link to="/Brands">
            <button className="brands">Brands</button>
          </Link>
        </div>
        <br />
        <div className="tabout">
          <h3>About US</h3>
          <div className="aboutus">
            <div className="a1">
              <p className="Number">{Object.keys(info)[1]}</p>
              <h4 className="bd">{info["Who we are"]}</h4>
            </div>
            <div className="a1">
              <p className="name-care">{Object.keys(info)[0]}</p>
              <h4 className="pd">{info["What we care about"]}</h4>
            </div>
            <div className="a1">
              <p className="Number">{Object.keys(info)[2]}</p>
              <h4 className="pd">{info["How we rate brands"]}</h4>
            </div>
          </div>
        </div>

        <div className="ext">
          <h1>
            {" "}
            Don’t have our Chrome Extension yet? Find out more information{" "}
            <a href="#">Here</a>{" "}
          </h1>
        </div>
      </div>
    );
  }
}
