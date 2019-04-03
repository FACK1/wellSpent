import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Brands from "./components/Brands";
import Brand from "./components/Brand";

class App extends Component {
  render() {
    return (
      <HashRouter>
      <Switch>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/Brands" component={Brands} />
          <Route exact path="/Brand/:name" component={Brand} />
        </div>
      </Switch>
      </HashRouter>
    );
  }
}

export default App;
