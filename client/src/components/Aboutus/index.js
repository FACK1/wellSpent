import React, { Component } from "react";
import "./aboutus.css";
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
      <div className="big-big">
        <div>
          <h3>About US</h3>
          <div>
            <div>
              <p className="all">01</p>
              <h4 className="par1">{info.what_is_it}</h4>
            </div>
            <div>
              <p className="all">02</p>
              <h4>{info.why}</h4>
            </div>
            <div>
              <p className="all">03</p>
              <h4>{info.our_principle}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
