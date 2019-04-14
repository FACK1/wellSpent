import React from "react";
import "./add.css";
import axios from "axios";

class AddFeedback extends React.Component {
  state = {
    value: "",
    Name: "",
    Feedback: "",
    Email: "",
    Brands: this.props.name
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { Brands, Name, Feedback, Email } = this.state;
    axios
      .post("/api/addfeedback", { Brands, Name, Feedback, Email })
      .then(({ data: { success } }) => {
        if (success) {
          alert("Thank You For Your Feedback !!");
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
        <p>
          We are always looking to improve our brand ratings, so if there is
          anything we have missed, anything you think we should know, or just
          any other feedback about brand rankings, please submit here!{" "}
        </p>
        <form className="form" onSubmit={this.handleSubmitForm}>
          <div className="details">
            <div className="namedetails">
              <h3>Your Name</h3>
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
              <h3>Your Email</h3>
              <input
                className="inputborder"
                placeholder="Enter Your Email Here"
                type="text"
                name="Email"
                value={this.state.Email}
                onChange={this.handleChange}
              />
            </div>
            <div className="namedetails">
              <h3>Feedback</h3>
              <input
                className="inputborder"
                placeholder="Enter Your Feedback Here"
                type="text"
                name="Feedback"
                value={this.state.Feedback}
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
