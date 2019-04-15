import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Brands from "./components/Brands";
import Brand from "./components/Brand";
import Methodology from "./components/Methodology";
import Aboutus from "./components/Aboutus";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/Brands" component={Brands} />
            <Route exact path="/Methodology" component={Methodology} />
            <Route exact path="/Brand/:name" component={Brand} />
            <Route exact path="/Aboutus" component={Aboutus} />
          </div>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
