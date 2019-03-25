import React, {Component} from 'react';
import './Autosuggests.css';
import Autosuggest from 'react-autosuggest';
<<<<<<< HEAD

const brands = [
  'Andy','Zara','ADAM','Ball','AA','AB','AC','BA','BB'
];
=======
import axios from "axios";
>>>>>>> e0b1c639bc6b9fb5d2d8bef105341793fe57505a

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
    <span>{suggestion}</span>
  );
}

export default class Autosuggests extends Component {
  state = {
      value: '',
      suggestions: [],
      loading: false,
      brandss:[]
    };
    componentDidMount() {
       axios
         .get("/brands")
         .then(({ data }) => {
            this.brandss = data.slice();
            brands = data.map(brand => {
             return {
               id: brand.id,
               name: brand.name
             };
           });
           this.setState({
             brandss:brands,
             loading: true
           });
           brands=this.brandss.slice();
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
