import React, { Component } from "react";
import "./about.css";
import axios from "axios";

export default class Aboutus extends Component {
  state = {
    info: []
  };
  componentDidMount() {
    axios
      .get("/api/aboutus")
      .then(({ data }) => {
        // console.log(data[0]);
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
    console.log("info", info);
    return (
      <div className="about-title">
        <div>
          <h3>About US</h3>
          <div>
            <div>
              <p className="Number">{Object.keys(info)[1]}</p>
              <h4 className="pargrah-about">{info["Who we are"]}</h4>
            </div>
            <div className="Whatwecareabout">
              <p className="Number">{Object.keys(info)[0]}</p>
              <h4>{info["What we care about"]}</h4>
            </div>
            <div className="Whatwecareabout">
              <p className="Number">{Object.keys(info)[2]}</p>
              <h4>{info["How we rate brands"]}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
