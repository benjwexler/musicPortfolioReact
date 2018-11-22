import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';
import Track from './Tracks/Tracks.js';

let firstPlay
let currentTrack = 1
// let audioPlayer = document.getElementById("audio")
// let audioSource = document.getElementById("audioSource")

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: {
        track1: {
          name: "I Got You",
          coverArt: "I Got You Cover Art.png",
          soundfile: "/soundfiles/Wex & Cred - I Got You (ft. MKHL).mp3",
          isPlaying: false
        },
        track2: {
          name: "Aura",
          coverArt: "AuraCoverArt.png",
          soundfile: "/soundfiles/Wex - Aura (ft. Waywoc) 4.wav",
          isPlaying: false
        },
        track3: {
          name: "Strictly for the Music",
          coverArt: "evenNewStrict.png",
          soundfile: "/soundfiles/Strictly for the Music.wav",
          isPlaying: false
        },
      }
    }
  }


  playAndPauseTrack = (whichTrack) => {
    console.log(whichTrack)
    let id = whichTrack
    id = id[id.length - 1]

    console.log(this.state.tracks[whichTrack].soundfile)
    let audioPlayer = document.getElementById("audio")
    if (firstPlay === undefined) {
      currentTrack = id;
      firstPlay = true
    }
    if (this.state.tracks[whichTrack].isPlaying === false) {
      // console.log(audioSource)

      let audioSource = document.getElementById("audioSource")
      audioSource.src = this.state.tracks[whichTrack].soundfile
      if (currentTrack !== id || (firstPlay === true)) {
        audioPlayer.load()
      }
      audioPlayer.play()
      document.getElementById(whichTrack).innerHTML = '<i class="fas fa-pause fa-2x fontAwesomePlayTrackIcon"></i>'
      if (currentTrack !== id) {
        document.getElementById(whichTrack).innerHTML = '<i class="fas fa-play fa-2x fontAwesomePlayTrackIcon"></i>'
        this.state.tracks[`track${currentTrack}`].isPlaying = false
      }
    } else {
      audioPlayer.pause()
      document.getElementById(whichTrack).innerHTML = '<i class="fas fa-play fa-2x fontAwesomePlayTrackIcon"></i>'

    }

    firstPlay = false
    currentTrack = id;

    this.state.tracks[`track${id}`].isPlaying = !this.state.tracks[`track${id}`].isPlaying

  }

  render() {


    let tracks = (
      <div>
        {Object.keys(this.state.tracks).map((track) => {
          return <Track key={track} id={track} coverArt={this.state.tracks[track].coverArt} title={this.state.tracks[track].name}
            click={() => this.playAndPauseTrack(document.getElementById(track).id)}
          />
        })}
      </div>
    );


    return (
      <div className="App">
        <Header />
        <div id="picFrame">
          <img id="soundcloudAvatar" src="soundcloudAvatar.jpg" />
        </div>
        <div id="alltracksBossContainer">
          {tracks}
        </div>
        <div id="audioContainer">

          <audio id="audio" controls>
            <source id="audioSource" />
          </audio>
        </div>
      </div>
    )
  }
}

export default App;
