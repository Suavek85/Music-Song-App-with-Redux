import React, { Component } from "react";
import PopUpItem from "./PopupItem";
import { connect } from "react-redux";
import {
  hidePopup
} from "../../actions";

const mapStateToProps = state => {
  return {
    popup: state.handlePopup.popupDisplay,
    artist: state.handlePopup.urlArtist,
    track: state.handlePopup.urlTrack,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onHidePopup: () => dispatch(hidePopup()),
  };
};

class Popup extends Component {

  onClosePopup = () => {
    this.props.onHidePopup();
  }

  render() {
    const {popup, artist, track} = this.props;
    return (
      <div>
      {popup ? <PopUpItem onClosePopup={this.onClosePopup} artist={artist} track={track}/> : null}
      </div>
    ) 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup);