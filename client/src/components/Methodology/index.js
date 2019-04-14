import React, { Component } from "react";
import "./methodology.css";
import axios from "axios";

export default class Methodology extends Component {
    state = {
      info: []
    };
    componentDidMount() {
      axios
        .get("/api/methodology")
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
    <div className="div-father">
      <div className="page-titel">
        <h3>{info.title}</h3>
      </div>
      <div className="description-final">
        {info.Description}
      </div>
    </div>
  );
  }
}
