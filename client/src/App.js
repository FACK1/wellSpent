import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Brands from "./components/Brands";
import Brand from "./components/Brand";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/brands" component={Brands} />
          <Route exact path="/brand/:Name" component={Brand} />
        </div>
      </Router>
    );
  }
}

export default App;
