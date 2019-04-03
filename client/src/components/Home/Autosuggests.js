import React, { Component } from "react";
import "./Autosuggests.css";
import Autosuggest from "react-autosuggest";
import axios from "axios";
import { Link } from "react-router-dom";

let brands = [];
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  if (escapedValue === "") {
    return [];
  }
  const regex = new RegExp("^" + escapedValue, "i");
  return brands.filter(brand => regex.test(brand));
}
function getSuggestionValue(suggestion) {
  return suggestion;
}
function renderSuggestion(suggestion) {
  if(suggestion !== "No Brand with this Name"){
  return (
    <Link to={`/brand/${suggestion}`} className="button-link">
      <div>
        <span>{suggestion}</span>
      </div>
    </Link>
  );}
  else {
    return (
        <div>
          <span>No Brand With This Name</span>
        </div>
    );
  }
}

export default class Autosuggests extends Component {
  state = {
    value: "",
    suggestions: [],
    suggestion:"No Data Found"
  };
  componentDidMount() {
    axios
      .get("/brands")
      .then(({ data }) => {
        brands = data.map(brand => {
          return brand.Name;
        });
      })

      .catch(() => {
        console.log("Error");
      });
  }
  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };
  onSuggestionsFetchRequested = ({ value }) => {
  if(getSuggestions(value).length===0){
    this.setState({
      suggestions:["No Brand with this Name"]
    });
  }
  else {
    this.setState({
      suggestions: getSuggestions(value)
    });
  }
  };
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search for brands",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        className="pt-input"
      />
    );
  }
}
