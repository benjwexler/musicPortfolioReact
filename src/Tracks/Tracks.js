import React from 'react';

const track = (props) => {

    let i = 1
  
    return (
        <div className="tracksContainer">
            <div className="coverArtContainer">
            <img id="soundcloudAvatar" className="iGotYouCoverArt" src={props.coverArt} />
            </div>
            <div className="trackTitleContainer"> 
            <div className="title"> {props.title} </div> 
            </div>
        </div>
    )
};

export default track;