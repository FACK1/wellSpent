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
    loading: false,
    ids: [],
    NoData: ""
  };
  componentDidMount() {
    const { name } = this.props;
    axios
      .get(`/api/getfeedback/${name}`)
      .then(({ data }) => {
        if (data.length === 3) {
          this.state.ids.push(
            Object.keys(data[0])[0],
            Object.keys(data[1])[0],
            Object.keys(data[2])[0]
          );
          this.state.info.push(
            Object.values(data[0]),
            Object.values(data[1]),
            Object.values(data[2])
          );
          this.setState({
            loading: true
          });
        } else if (data.length === 2) {
          this.state.ids.push(Object.keys(data[0])[0], Object.keys(data[1])[0]);
          this.state.info.push(Object.values(data[0]), Object.values(data[1]));
          this.setState({
            loading: true
          });
        } else if (data.length === 1) {
          this.state.ids.push(Object.keys(data[0])[0]);
          this.state.info.push(Object.values(data[0]));
          this.setState({
            loading: true
          });
        } else {
          this.setState({
            NoData: "No Feedback For this Brand"
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  like = (id, like) => {
    const idfeedback = this.state.ids[id];
    axios
      .get(`/api/like/${idfeedback}/${like}`)
      .then(({ data: { success } }) => {
        if (success) {
          window.location.reload();
        } else {
          console.log("error");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  dislike = (id, dislike) => {
    const idfeedback = this.state.ids[id];
    axios
      .get(`/api/dislike/${idfeedback}/${dislike}`)
      .then(({ data: { success } }) => {
        if (success) {
          window.location.reload();
        } else {
          console.log("error");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="maina">
        <div className="mainf">
          <div className="feedback">
            <div className="header">
              <img src={lamba} alt="lamba" />
              <h3>What does the community think about {this.props.name} </h3>
            </div>
            <div className="mainorg">
              <div className="line" />
              <div className="cards">
                <h3>Feedback</h3>
                <h3>{this.state.NoData}</h3>
                {this.state.info.length !== 0 ? (
                  this.state.info.map((i, id) => {
                    return (
                      <div className="allcards">
                        <div className="carduser">
                          <div className="feedbackcard">
                            <img src={user} alt="user" />
                            <div className="nameuser">
                              <h4>Name</h4>
                              <h5>{i[0].Name}</h5>
                            </div>
                            <div className="feedback">
                              <h4>Feedback</h4>
                              <h5>{i[0].feedback}</h5>
                            </div>
                            <div className="votes">
                              <div className="like">
                                <button
                                  onClick={() => this.like(id, i[0].like)}
                                >
                                  <img src={like} alt="like" />
                                  <p>{i[0].like}</p>
                                </button>
                              </div>
                              <div className="dislike">
                                <button
                                  onClick={() => this.dislike(id, i[0].dislike)}
                                >
                                  <img src={dislike} alt="dislike" />
                                  <p>{i[0].dislike}</p>
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="line2" />
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="sweet-loading">
                    <RingLoader
                      color={"#1389A6"}
                      loading={this.state.loading}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <AddFeedback name={this.props.name} />
      </div>
    );
  }
}
