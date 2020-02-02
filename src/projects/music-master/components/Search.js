import React, { Component } from "react";

export default class Search extends Component {
  state = { artistQuery: "" };

  updateArtistQuery = event => {
    this.setState({ artistQuery: event.target.value });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.searchArtist();
    }
  };

  searchArtist = () => {
    this.props.searchArtist(this.state.artistQuery);
  };

  render() {
    return (
      <div>
        <input
          onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          className="form-control mt-3"
          type="text"
          placeholder="Search for an artist"
        />
        <button onClick={this.searchArtist} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    );
  }
}
