import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Brand from "./components/Brand";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Brand />
      </div>
    );
  }
}

export default App;
