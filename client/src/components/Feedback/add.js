import React from "react";
import "./add.css";
import axios from "axios";

class AddFeedback extends React.Component {
  state = {
    value: "",
    Name: "",
    feedback: "",
    Brands: this.props.name
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { Brands, Name, feedback } = this.state;
    axios
      .post("/addfeedback", { feedback, Brands, Name })
      .then(({ data: { success } }) => {
        if (success) {
          alert("Your Feedback Access us, Thanks !!");
          window.location.reload();
        } else {
          console.log("error");
        }
      })
      .catch(error => {
        this.setState({ error: error.response.data.error });
      });
  };
  handleSubmitForm = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="root1">
        <div className="name2">
          <h3>Give Feedback</h3>
        </div>
        <form className="form" onSubmit={this.handleSubmitForm}>
          <div className="details">
            <div className="namedetails">
              <h3>Name</h3>
              <input
                className="inputborder"
                placeholder="Enter Your Name Here"
                type="text"
                name="Name"
                value={this.state.Name}
                onChange={this.handleChange}
              />
            </div>
            <div className="namedetails">
              <h3>Comment</h3>
              <input
                className="inputborder"
                placeholder="Enter Your Feedback Here"
                type="text"
                name="feedback"
                value={this.state.feedback}
                onChange={this.handleChange}
              />
            </div>
            <div className="submit">
              <button className="button" onClick={this.handleClick}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddFeedback;
