import React, { Component } from "react";
import scrollDownSmooth from "../../components/Animations/Animations";
import HeaderItem from "../../components/Header/HeaderItem";

import { connect } from "react-redux";
import {
  setInput,
  requestMusic,
  requestSpecificMusic,
  isCardShow,
  activateLoading
} from "../../actions";

const mapStateToProps = state => {
  return {
    input: state.searchMusic.input,
    inputCountry: state.searchCountry.inputCountry,
    musicStateItemList: state.handleMusicCards.musicStateItemList,
    cardShow: state.isCardShow.cardShow,
    favsArray: state.handleFavs.favsArray
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setInput(event.target.value)),
    onRequestMusic: () => dispatch(requestMusic()),
    onRequestSpecificMusic: input => dispatch(requestSpecificMusic(input)),
    onCardShow: text => dispatch(isCardShow(text)),
    onActivateLoading: () => dispatch(activateLoading())
  };
};

class Header extends Component {
  onHeaderSearch = () => {
    this.props.onActivateLoading();
    this.props.onCardShow(true);
    this.props.onRequestSpecificMusic(this.props.input);
    scrollDownSmooth();
  };

  onShowFavs = () => {
    if (this.props.favsArray.length === 0) {
      return;
    }
    this.props.onCardShow(false);
    scrollDownSmooth();
  };

  render() {
    const { favsArray, onSearchChange } = this.props;
    return (
      <div>
        <HeaderItem
          favsArray={favsArray}
          onShowFavs={this.onShowFavs}
          onSearchChange={onSearchChange}
          headerSearch={this.onHeaderSearch}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
