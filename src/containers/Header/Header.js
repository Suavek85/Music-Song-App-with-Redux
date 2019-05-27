import React, { Component, Fragment } from "react";
import scrollDownSmooth from "../../components/Animations/Animations";
import HeaderItem from "../../components/Header/HeaderItem";

import { connect } from "react-redux";
import {
  setInput,
  requestMusic,
  requestSpecificMusic,
  isCardShow,
  activateLoading,
  setAutocomplete
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
    onAutocompleteSelect: event =>
      dispatch(setAutocomplete(event.target.textContent)),
    onRequestMusic: () => dispatch(requestMusic()),
    onRequestSpecificMusic: input => dispatch(requestSpecificMusic(input)),
    onCardShow: text => dispatch(isCardShow(text)),
    onActivateLoading: () => dispatch(activateLoading())
  };
};

class Header extends Component {
  onAutocomplete = event => {
    document.getElementById("search-input").value = event.target.textContent;
    this.props.onAutocompleteSelect(event);
  };

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
    const { favsArray, onSearchChange, input } = this.props;
    return (
      <Fragment>
        <HeaderItem
          favsArray={favsArray}
          onShowFavs={this.onShowFavs}
          onSearchChange={onSearchChange}
          headerSearch={this.onHeaderSearch}
          input={input}
          onAutocomplete={this.onAutocomplete}
        />
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
