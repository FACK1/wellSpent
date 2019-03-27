import React, {Component} from 'react';
import './Autosuggests.css';
import Autosuggest from 'react-autosuggest';
import axios from "axios";
import { Link } from "react-router-dom";

let brands = [];
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  if (escapedValue === '') {
    return [];
  }
  const regex = new RegExp('^' + escapedValue, 'i');
  return brands.filter(brand => regex.test(brand));
}
function getSuggestionValue(suggestion) {
  return suggestion;
}
function renderSuggestion(suggestion) {
  return (
    <span>
     <Link
      to={`/brand/${suggestion}`}
        className="button-link"  >
        {suggestion}
          </Link>
</span>
  );
}

export default class Autosuggests extends Component {
  state = {
      value: '',
      suggestions: [],
    };
    componentDidMount() {
       axios
         .get("/brands")
         .then(({ data }) => {
        const result= data.map(brand => {
             return (brand.name)
           });
          brands= result;
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
    this.setState({
      suggestions: getSuggestions(value)
    });
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
    )
  }}
