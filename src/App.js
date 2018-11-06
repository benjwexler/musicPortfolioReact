import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';
import Track from './Tracks/Tracks.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: {
        track1: {
          name: "I Got You",
          coverArt: "I Got You Cover Art.png",
          soundfile: "soundfiles/Wex & Cred - I Got You (ft. MKHL).mp3",
        },
        track2: {
          name: "Aura",
          coverArt: "AuraCoverArt.png",
          soundfile: "soundfiles/Wex - Aura (ft. Waywoc) 4.wav",
        },
        track3: {
          name: "Strictly for the Music",
          coverArt: "evenNewStrict.png",
          soundfile: "soundfiles/Strictly for the Music.wav",
        },
      }, length: 0
    }
  }

  componentDidMount() {
    let tracksObjLength = Object.keys(this.state.tracks).length

    this.setState({ length: tracksObjLength })
  }

  render() {

    let tracks = []

    for (let i = 1; i <= this.state.length; i++) {
      tracks.push(<Track key={i} coverArt={this.state.tracks[`track${i}`].coverArt} title={this.state.tracks[`track${i}`].name} />)
    }

    return (
      <div className="App">
        <Header />
        <div id="picFrame">
          <img id="soundcloudAvatar" src="soundcloudAvatar.jpg" />
        </div>
        <div id="alltracksBossContainer">
          {tracks}
        </div>
      </div>
    )
  }
}

export default App;
