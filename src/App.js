import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <div id="picFrame">
            <img id="soundcloudAvatar" src="soundcloudAvatar.jpg"/>
        </div>
      </div>
    )
  }
}

export default App;
