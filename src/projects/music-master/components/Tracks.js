import React, { Component } from "react";

export default class Tracks extends Component {
  state = { playing: false, audio: null, playingPreviewUrl: null };
  playAudio = previewUrl => () => {
    const audio = new Audio(previewUrl);

    if (!this.state.playing) {
      audio.play();
      this.setState({ playing: true, audio, playingPreviewUrl: previewUrl });
    } else {
      this.state.audio.pause();

      if (this.state.playingPreviewUrl === previewUrl) {
        this.setState({ playing: false });
      } else {
        audio.play();
        this.setState({ audio, playingPreviewUrl: previewUrl });
      }
    }
  };

  trackIcon = track => {
    if (!track.preview_url) {
      return <span>N/A</span>;
    }

    if (
      this.state.playing &&
      this.state.playingPreviewUrl === track.preview_url
    ) {
      return <span>| |</span>;
    }

    return <span>&#9654;</span>;
  };

  render() {
    const { tracks } = this.props;

    return (
      <div className="mt-3">
        {tracks.map(track => {
          const { id, name, album, preview_url } = track;

          return (
            <div
              onClick={this.playAudio(preview_url)}
              key={id}
              className="track"
            >
              <img
                className="img-fluid track-image"
                src={album.images[0].url}
                alt={name + "-images"}
              />
              <p className="track-text">{name}</p>
              <p className="track-icon">{this.trackIcon(track)}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
