import React, { Component } from "react";
import "./home.css";
import Autosuggests from "./Autosuggests";
import axios from "axios";

export default class Home extends Component {
  state = {
      loading: false,
      info:[]
    };
    componentDidMount() {
       axios
         .get("/aboutus")
         .then(({ data }) => {
          const  result = data.map(d => {
             return {
               what_is_it: d.what_is_it,
               why: d.why,
               our_principle:d.our_principle
             };
           });
           this.setState({
             info:result[0],
             loading: true
           });
         })
         .catch(() => {
          console.log("Error");
         });
     }

  render() {
    return (
      <div className='main'>
      <div>
        <h1>Well Spent</h1>
        <h2>Helping you to make your shop more ethical</h2>
      </div>
      <div className="main-2">
      <Autosuggests />
        <button className="brands">Brands</button>
      </div>
      <br/>
      <div className="tabout">
      <h3>About US</h3>
      <div className="aboutus">
        <div className='a1'>
        <p>01</p>
          <h4 className='bd'>{this.state.info.what_is_it}</h4>
         </div>
        <div className='a1'>
          <p>02</p>
          <h4 className='pd'>{this.state.info.why}</h4>
         </div>
        <div className='a1'>
          <p>03</p>
          <h4 className='pd'>{this.state.info.our_principle}</h4>
         </div>
      </div>
      </div>

        <div className="ext">
          <h1>
            {" "}
            Don’t have our Chrome Extension yet? Find out more information{" "}
            <a href="#">Here</a>{" "}
          </h1>
        </div>
      </div>
    );
  }
}
