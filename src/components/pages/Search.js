import React, { Component } from 'react';
import SearchBar from "../SearchBar";
import ResultList from "../ResultList";
import API from "../../utils/API";

export default class Search extends Component {
  state = {
    breeds: [],
    currentBreed: "",
    currentImgs: [],
  }

  componentDidMount = () => {
    API.breeds()
      .then(res => this.setState({ breeds: res.data.message }))
      .catch(err => console.log(err));
  }

  searchBreed = query => {
    API.search(query)
      .then(res => this.setState({ currentImgs: res.data.message }))
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBreed(this.state.currentBreed);
  };



  render() {
    return (
      <div>
        <SearchBar
          currentBreed={this.state.currentBreed}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          breeds={this.state.breeds}
        />
        <ResultList images={this.state.currentImgs} />
      </div>
    )
  }
}
