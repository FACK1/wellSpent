import React, { Component } from "react";
import "./feedback.css";
import lamba from "./assets/lamba.png"
import user from "./assets/user.png"
import like from "./assets/like.png"
import dislike from "./assets/dislike.png"



export default class Feedback extends Component {
  render() {
    return (
      <div className='mainf'>
        <div className="feedback">
          <div className="header">
            <img src={lamba} alt="lamba"/>
            <h3>What does the community think about Zara </h3>
          </div>
          <div className="mainorg">
          <div className="line"></div>
            <div className="cards">
            <h3>Feedback</h3>
            <div className="allcards">
            <div className="carduser">
                <div className="feedbackcard">
                  <img src={user} alt="user"/>
                    <div className="nameuser">
                    <h4>Name</h4>
                    <h5>Shahenaz</h5>
                    </div>
                  <div className="feedback">
                  <h4>Feedback</h4>
                  <h5>Great Information! I got new information about this brand</h5>
                  </div>
                </div>
                <div className="votes">
                  <div className="like">
                  <img src={like} alt="like"/>
                  <p>4</p>
                  </div>
                  <div className="dislike">
                    <img src={dislike} alt="dislike"/>
                    <p>1</p>
                  </div>

                </div></div>
                <div className="line2"></div>
                </div>
              </div>
          </div>
          </div>
        <div className="addfedback">  </div>
      </div>
    );
  }
}
