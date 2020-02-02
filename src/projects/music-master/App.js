import React, { Component } from "react";
import Search from "./components/Search";
import "./App.css";
import Artist from "./components/Artist";
import Tracks from "./components/Tracks";

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com";

class App extends Component {
  state = { artist: null, tracks: [] };

  componentDidMount() {
    this.searchArtist("lisa");
  }

  searchArtist = artistQuery => {
    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
      .then(response => response.json())
      .then(json => {
        if (json.artists.total > 0) {
          const artist = json.artists.items[0];

          this.setState({ artist });

          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            .then(response => response.json())
            .then(json => this.setState({ tracks: json.tracks }))
            .catch(err => alert(err.message));
        }
      })
      .catch(err => alert(err.message));
  };

  render() {
    console.log(this.state);

    return (
      <div className="container">
        <div className="col-md-10 mx-auto text-center">
          <h2>Music Master</h2>
          <Search searchArtist={this.searchArtist} />
          <Artist artist={this.state.artist} />
          <Tracks tracks={this.state.tracks} />
        </div>
      </div>
    );
  }
}

export default App;
