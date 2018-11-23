import React from 'react';
// import './Person.css';

class Header extends React.Component {
    render() {
      return (
        <React.Fragment>
          <nav className="navbar navbar-expand-md navbar-light navbarText">
        <div id="logoText" className="navbar-brand">
            <img alt="Logo" id="kicklrLogo" src="logo.png"/> Mixed By Wex
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item ">
                    <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/mixedbywex">SoundCloud</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mixedbywex/">Instagram</a>
                </li>
            </ul>

        </div>
    </nav>
        </React.Fragment>
      );
    }
  }

export default Header;