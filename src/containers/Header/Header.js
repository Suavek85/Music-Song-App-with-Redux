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
  setAutocomplete,
  showAutocomplete
} from "../../actions";

const mapStateToProps = state => {
  return {
    input: state.searchMusic.input,
    inputCountry: state.searchCountry.inputCountry,
    musicStateItemList: state.handleMusicCards.musicStateItemList,
    cardShow: state.isCardShow.cardShow,
    autocompleteShow: state.handleAutocomplete.autocompleteShow,
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
    onActivateLoading: () => dispatch(activateLoading()),
    onShowAutocomplete: text => dispatch(showAutocomplete(text))
  };
};

class Header extends Component {
  
  onAutocompleteHandler = event => {
    document.getElementById("search-input").value = event.target.textContent;
    this.props.onAutocompleteSelect(event);
    this.props.onShowAutocomplete(false);
  };

  onSearchChangeHandler = event => {
    this.props.onSearchChange(event);
    this.props.onShowAutocomplete(true);
  };

  onHeaderSearchHandler = () => {
    this.props.onActivateLoading();
    this.props.onCardShow(true);
    this.props.onRequestSpecificMusic(this.props.input);
    scrollDownSmooth();
  };

  onShowFavsHadler = () => {
    if (this.props.favsArray.length === 0) {
      return;
    }
    this.props.onCardShow(false);
    scrollDownSmooth();
  };

  render() {
    const { favsArray, input, autocompleteShow } = this.props;
    const {
      onSearchChangeHandler,
      onHeaderSearchHandler,
      onAutocompleteHandler,
      onShowFavsHadler
    } = this;
    return (
      <Fragment>
        <HeaderItem
          favsArray={favsArray}
          onShowFavs={onShowFavsHadler}
          onSearchChange={onSearchChangeHandler}
          headerSearch={onHeaderSearchHandler}
          input={input}
          onAutocomplete={onAutocompleteHandler}
          autocompleteShow={autocompleteShow}
        />
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
