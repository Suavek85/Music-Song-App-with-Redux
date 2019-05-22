import React from "react";
import "./Popup.css";

const PopupItem = props => {
  return (
    <div className="overlay">
      <div className="popup">
        <iframe
          src="https://www.youtube.com/embed/E7wJTI-1dvQ"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          width="100%"
          height="100%"
          title="video"
        />
        <div onClick={props.onClosePopup} className="close">×</div>
      </div>
    </div>
  );
};

export default PopupItem;
