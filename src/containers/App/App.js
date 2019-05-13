import React, { Component } from "react";
import Header from "../Header/Header";
import Card from "../Card/Card";
import Country from "../Country/Country";
import Footer from "../../components/Footer/Footer";
import {
  countriesMain,
  countrySelected
} from "../../components/Country/CountriesStateStyle";
import Spinner from "../../components/Animations/Spinner/Spinner";
import "./App.css";

import { connect } from "react-redux";
import {
  requestMusic,
  isCardShow,
  toggleCardFav,
  activateLoading,
  setInputCountry,
  addFav,
  removeFav
} from "../../actions";

const mapStateToProps = state => {
  return {
    input: state.searchMusic.input,
    inputCountry: state.searchCountry.inputCountry,
    musicStateItemList: state.handleMusicCards.musicStateItemList,
    isLoading: state.handleMusicCards.isLoading,
    cardShow: state.isCardShow.cardShow,
    favsArray: state.handleFavs.favsArray
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchCountryChange: event =>
      dispatch(setInputCountry(event.target.value)),
    onRequestMusic: () => dispatch(requestMusic()),
    onCardShow: text => dispatch(isCardShow(text)),
    onToggleCardFav: text => dispatch(toggleCardFav(text)),
    onActivateLoading: () => dispatch(activateLoading()),
    onAddFav: text => dispatch(addFav(text)),
    onRemoveFavs: text => dispatch(removeFav(text))
  };
};

class App extends Component {
  state = {
    countries: countriesMain,
    countryBottom: countrySelected
  };

  componentDidMount() {
    this.props.onRequestMusic();
    this.props.onCardShow(true);
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div className="App">
        <Header />
        <Spinner loading={isLoading} />
        <Card />
        <Country />
        <Footer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
