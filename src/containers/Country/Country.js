import React, { Component } from "react";
import CountryList from "../../components/Country/CountryList";
import CountriesList from "../../components/Country/CountriesList";
import countryCodeArr from "../../components/Country/CountryCode";

import { connect } from "react-redux";
import {
  requestMusic,
  requestSpecificMusic,
  isCardShow,
  toggleCardFav,
  toggleCountryFav,
  toggleCountrySelectedFav,
  activateLoading,
  setInputCountry,
  addFav,
  removeFav,
  requestCountry,
  requestSelectedCountry
} from "../../actions";

const mapStateToProps = state => {
  return {
    input: state.searchMusic.input,
    inputCountry: state.searchCountry.inputCountry,
    musicStateItemList: state.handleMusicCards.musicStateItemList,
    isLoading: state.handleMusicCards.isLoading,
    cardShow: state.isCardShow.cardShow,
    favsArray: state.handleFavs.favsArray,
    countriesMain: state.handleCountries,
    countrySelected: state.handleSelectedCountry
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestMusic: () => dispatch(requestMusic()),
    onSearchCountryChange: event =>
      dispatch(setInputCountry(event.target.value)),
    onRequestSpecificMusic: input => dispatch(requestSpecificMusic(input)),
    onCardShow: text => dispatch(isCardShow(text)),
    onToggleCardFav: text => dispatch(toggleCardFav(text)),
    onActivateLoading: () => dispatch(activateLoading()),
    onAddFav: text => dispatch(addFav(text)),
    onRemoveFavs: text => dispatch(removeFav(text)),
    onRequestCountries: (text, no) => dispatch(requestCountry(text, no)),
    onToggleCountryFav: text => dispatch(toggleCountryFav(text)),
    onRequestSelectedCountry: text => dispatch(requestSelectedCountry(text)),
    onToggleCountrySelectedFav: text => dispatch(toggleCountrySelectedFav(text))
  };
};

class Country extends Component {
  componentDidMount() {
    [
      { code: "br", index: 0 },
      { code: "us", index: 1 },
      { code: "es", index: 2 }
    ].forEach(el => {
      this.props.onRequestCountries(el.code, el.index);
      console.log(this.props.countriesMain);
    });
  }

  onCountryButtonClick = () => {
    //converting country name to country code
    const countryIndex = countryCodeArr.findIndex(el => {
      return el.name === this.props.inputCountry;
    });
    if (countryIndex === -1) {
      return;
    }
    const countryCode = countryCodeArr[countryIndex].code;
    this.props.onRequestSelectedCountry(countryCode);
  };

  onCountryFavClick = event => {
    //defining selected song
    const target = event.target.dataset.id;
    const number = event.target.dataset.no;
    const country = [...this.props.countriesMain];
    let newArray = [];
    const topSongsArr = [
      country[0].topSongs,
      country[1].topSongs,
      country[2].topSongs
    ];
    topSongsArr.forEach(el => newArray.push(...el));

    const countryIndex = newArray.findIndex(el => el.id === parseFloat(target));

    const songItem = {
      track: newArray[countryIndex].track,
      album: newArray[countryIndex].album,
      artist: newArray[countryIndex].artist,
      id: newArray[countryIndex].id,
      favClicked: true,
      addedToFav: true
    };

    //toggling fav icons empty/full heart
    const updatedCountries = [...this.props.countriesMain];
    [0, 1, 2].forEach(element => {
      updatedCountries[element].topSongs.forEach(el => {
        if (el.id === parseFloat(target) && el.number === parseFloat(number)) {
          el.favClicked = !el.favClicked;
        } else {
          return;
        }
      });
    });
    this.props.onToggleCountryFav(updatedCountries);

    //conditionally pushing defined song to Favs
    const currentFavsArray = [...this.props.favsArray];
    const alreadyFav = currentFavsArray.find(
      el => el.id === parseFloat(songItem.id)
    );
    if (songItem.favClicked && alreadyFav === undefined) {
      const newsFavsArray = [...currentFavsArray, songItem];
      this.props.onAddFav(newsFavsArray);
    }
  };

  onSelectedCountryFavClick = event => {
    //defining selected song
    const target = event.target.dataset.id;
    const number = event.target.dataset.no;
    const updatedCountry = [...this.props.countrySelected];
    const countryIndex = updatedCountry[0].topSongs.findIndex(
      el => el.id === parseFloat(target)
    );
    const songItem = {
      track: updatedCountry[0].topSongs[countryIndex].track,
      album: updatedCountry[0].topSongs[countryIndex].album,
      artist: updatedCountry[0].topSongs[countryIndex].artist,
      id: updatedCountry[0].topSongs[countryIndex].id,
      favClicked: true,
      addedToFav: true
    };

    //toggling fav icons empty/full heart
    updatedCountry[0].topSongs.forEach(el => {
      if (el.id === parseFloat(target) && el.number === parseFloat(number)) {
        el.favClicked = !el.favClicked;
      } else {
        return;
      }
    });
    this.props.onToggleCountrySelectedFav(updatedCountry);

    //conditionally pushing defined song to Favs
    const currentFavsArray = [...this.props.favsArray];
    const alreadyFav = currentFavsArray.find(
      el => el.id === parseFloat(songItem.id)
    );
    if (songItem.favClicked && alreadyFav === undefined) {
      const newsFavsArray = [...currentFavsArray, songItem];
      this.props.onAddFav(newsFavsArray);
    }
  };

  render() {
    const {
      onSearchCountryChange,
      countriesMain,
      countrySelected
    } = this.props;
    return (
      <div>
        <CountriesList
          countries={countriesMain}
          onCountryFavClick={this.onCountryFavClick}
        />
        <CountryList
          buttonClick={this.onCountryButtonClick}
          searchChange={onSearchCountryChange}
          countrySelected={countrySelected}
          onCountryFavClick={this.onSelectedCountryFavClick}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Country);
