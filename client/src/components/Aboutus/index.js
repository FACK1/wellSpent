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
      <div className="about-title">
        <div>
          <h3>About US</h3>
          <div>
            <div>
              <p className="number-about">01</p>
              <h4 className="pargrah-about">{info.what_is_it}</h4>
            </div>
            <div>
              <p className="number">02</p>
              <h4>{info.why}</h4>
            </div>
            <div>
              <p className="number">03</p>
              <h4>{info.our_principle}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
