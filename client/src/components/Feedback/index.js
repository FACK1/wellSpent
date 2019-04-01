import React, { Component } from "react";
import "./feedback.css";
import lamba from "./assets/lamba.png";
import user from "./assets/user.png";
import like from "./assets/like.png";
import dislike from "./assets/dislike.png";
import AddFeedback from "./add.js";
import axios from "axios";
import { RingLoader } from "react-spinners";

export default class Feedback extends Component {
  state = {
    info: [],
    loading: false
  };
  componentDidMount() {
    const { name } = this.props;
    axios
      .get(`/getfeedback/${name}`)
      .then(({ data }) => {
        this.setState({
          info: data,
          loading: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="mainf">
        <div className="feedback">
          <div className="header">
            <img src={lamba} alt="lamba" />
            <h3>What does the community think about Zara </h3>
          </div>
          <div className="mainorg">
            <div className="line" />
            <div className="cards">
              <h3>Feedback</h3>
              {this.state.info.length !== 0 ? (
                this.state.info.map(i => {
                  return (
                    <div className="allcards">
                      <div className="carduser">
                        <div className="feedbackcard">
                          <img src={user} alt="user" />
                          <div className="nameuser">
                            <h4>Name</h4>
                            <h5>{i.Name}</h5>
                          </div>
                          <div className="feedback">
                            <h4>Feedback</h4>
                            <h5>{i.feedback}</h5>
                          </div>
                        </div>
                        <div className="votes">
                          <div className="like">
                            <img src={like} alt="like" />
                            <p>{i.like}</p>
                          </div>
                          <div className="dislike">
                            <img src={dislike} alt="dislike" />
                            <p>{i.dislike}</p>
                          </div>
                        </div>
                        <div className="line2" />
                      </div>
                    </div>
                  );
                })
              ) : (
                <RingLoader color={"#ff8094"} loading={this.state.loading} />
              )}
            </div>
          </div>
        </div>
        <AddFeedback />
      </div>
    );
  }
}
