import React, { Component, Fragment } from "react";
import PopUpItem from "../../components/Popup/PopupItem";
import { connect } from "react-redux";
import { hidePopup } from "../../actions";

const mapStateToProps = state => {
  return {
    popup: state.handlePopup.popupDisplay,
    artist: state.handlePopup.urlArtist,
    track: state.handlePopup.urlTrack
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onHidePopup: () => dispatch(hidePopup())
  };
};

class Popup extends Component {
  onClosePopup = () => {
    this.props.onHidePopup();
  };

  render() {
    const { popup, artist, track } = this.props;
    return (
      <Fragment>
        {popup ? (
          <PopUpItem
            onClosePopup={this.onClosePopup}
            artist={artist}
            track={track}
          />
        ) : null}
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup);
