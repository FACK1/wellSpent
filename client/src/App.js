import React, { Component } from "react";
import "./App.css";
import Brands from "./components/Brands";
import Header from "./components/Header";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Brands />
      </div>
    );
  }
}

export default App;
