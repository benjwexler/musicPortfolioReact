import React from 'react';

const track = (props) => {

    return (
        <div className="tracksContainer">
            <div className="coverArtContainer">
                {/* The conditional below is just because on of the photos has a filter property on it*/}
                <img alt={props.altTag} id="soundcloudAvatar" className={props.coverArt === "AuraCoverArt.png" ? "coverArt" : "iGotYouCoverArt"}
                    src={props.coverArt} />
            </div>
            <div className="trackTitleContainer">
                <div className="title"> {props.title} </div>
            </div>
            <div onClick={props.click} id={props.id} className="playPauseContainer">
                <i className="fas fa-play fa-2x fontAwesomePlayTrackIcon"></i>
            </div>

        </div>
    )
};

export default track;