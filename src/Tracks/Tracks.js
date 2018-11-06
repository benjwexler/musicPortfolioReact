import React from 'react';

const track = (props) => {

    let i = 1
  
    return (
        <div className="tracksContainer">
            <div className="coverArtContainer">
            {/* The conditional below is just because on of the photos has a filter property on it*/}
            <img id="soundcloudAvatar" className={props.coverArt === "AuraCoverArt.png" ? "coverArt" : "iGotYouCoverArt"} 
            src={props.coverArt} />
            </div>
            <div className="trackTitleContainer"> 
            <div className="title"> {props.title} </div> 
            </div>
        </div>
    )
};

export default track;