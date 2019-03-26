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
        data = data.map(brand => {
         return {
           what_is_it: data.what_is_it,
           why: data.why,
           our_principle : data.our_principle
         };
       });
       this.setState({
         info:data,
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
          <h4 className='bd'>We are creating a movement to empower customers to make social change, by allowing them to vote with their wallets and put pressure on companies to change by impacting upon their bottom line</h4>
         </div>
        <div className='a1'>
          <p>02</p>
          <h4 className='pd'>We score brands based on their environmental and labour practices</h4>
         </div>
        <div className='a1'>
          <p>03</p>
          <h4 className='pd'>We use information from a range of sources, and encourage our community to share their own knowledge</h4>
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
