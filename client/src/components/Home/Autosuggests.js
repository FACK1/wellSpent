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
  if (suggestion !== "Not Found") {
    return (
      <Link to={`/Brand/${suggestion}`} className="button-link">
        <div>
          <span>{suggestion}</span>
        </div>
      </Link>
    );
  } else {
    return (
      <div>
        <span>Not Found</span>
      </div>
    );
  }
}

export default class Autosuggests extends Component {
  state = {
    value: "",
    suggestions: []
  };
  componentDidMount() {
    axios
      .get("/api/brands")
      .then(({ data }) => {
        brands = data.result.map(brand => {
          return brand.BrandName;
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
    if (getSuggestions(value).length === 0) {
      this.setState({
        suggestions: ["Not Found"]
      });
    } else {
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
