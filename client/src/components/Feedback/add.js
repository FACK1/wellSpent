import React from "react";
import "./add.css";

class AddFeedback extends React.Component {
  render() {
    return (
      <div className="root1">
        <div className="name2">
          <h3>Give Feedback</h3>
        </div>
        <div className="details">
          <div className="namedetails">
            <h3>Name</h3>
            <div className="line2" />
          </div>
          <div className="namedetails">
            <h3>Comment</h3>
            <div className="line2" />
          </div>
          <div className="submit">
            <button className="button">Submit </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddFeedback;
