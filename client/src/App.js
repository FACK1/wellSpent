import React, { Component } from "react";
import "./App.css";
import Brands from "./components/Brands";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Brands />
      </div>
    );
  }
}

export default App;
