import React, { Component } from "react";
import PopUpItem from "./PopupItem";
import { connect } from "react-redux";
import {
  hidePopup
} from "../../actions";

const mapStateToProps = state => {
  return {
    popup: state.handlePopup.popupDisplay,
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

  //onOpenPopup = () => {
    //this.setState({popupDisplay: true})
  //}
  
  render() {
    const {popup} = this.props;
    return (
      <div>
      {popup ? <PopUpItem onClosePopup={this.onClosePopup} /> : null}
      </div>
    ) 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup);