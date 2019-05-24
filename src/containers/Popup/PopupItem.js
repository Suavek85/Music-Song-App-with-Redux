import React from "react";
import "./Popup.css";
import { youTubeUrl } from "../API";

const PopupItem = props => {
  return (
    <div className="overlay">
      <div className="popup">
        <iframe
          src={youTubeUrl(
            props.track,
            props.artist
          )}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          width="100%"
          height="100%"
          title="video"
        />
        <div onClick={props.onClosePopup} className="close hvr-icon-spin hvr-icon">×</div>
      </div>
    </div>
  );
};

export default PopupItem;
