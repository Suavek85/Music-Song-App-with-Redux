import React, { Component } from "react";
import CountryList from "../../components/Country/CountryList";
import CountriesList from "../../components/Country/CountriesList";
import { specificCountryUrl } from "../API";
import {
  countriesMain,
  countrySelected
} from "../../components/Country/CountriesStateStyle";
import countryCodeArr from "../../components/Country/CountryCode";

import { connect } from "react-redux";
import {
  requestMusic,
  requestSpecificMusic,
  isCardShow,
  toggleCardFav,
  activateLoading,
  setInputCountry,
  addFav,
  removeFav,
  requestCountry
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
    onRequestCountries: (text) => dispatch(requestCountry(text))
  };
};

class Country extends Component {
  state = {
    countries: countriesMain,
    countryBottom: countrySelected
  };

  componentDidMount() {
    this.props.onRequestCountries('br');
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

    //fetching url with country code
    fetch(specificCountryUrl(countryCode))
      .then(data => {
        return data.json();
      })
      .then(res => {
        if (res.message.body.track_list) {
          this.setState(prevState => {
            const newCountryBottom = prevState.countryBottom;
            newCountryBottom[0].showSongs = true;
            newCountryBottom[0].topSongs.forEach((el, i) => {
              el.track = res.message.body.track_list[i].track.track_name;
              el.album = res.message.body.track_list[i].track.album_name;
              el.artist = res.message.body.track_list[i].track.artist_name;
              el.id = res.message.body.track_list[i].track.track_id;
            });
            return {
              countryBottom: newCountryBottom
            };
          });
        }
      });
  };

  onCountryFavClick = event => {
    //defining selected song
    const target = event.target.dataset.id;
    const number = event.target.dataset.no;
    const country = this.state.countries;
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
    this.setState(prevState => {
      const country = prevState.countries;
      [0, 1, 2].forEach(element => {
        country[element].topSongs.forEach(el => {
          if (
            el.id === parseFloat(target) &&
            el.number === parseFloat(number)
          ) {
            el.favClicked = !el.favClicked;
          } else {
            return;
          }
        });
      });
      return {
        countries: country
      };
    });

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
    const country = this.state.countryBottom;
    const countryIndex = country[0].topSongs.findIndex(
      el => el.id === parseFloat(target)
    );
    const songItem = {
      track: country[0].topSongs[countryIndex].track,
      album: country[0].topSongs[countryIndex].album,
      artist: country[0].topSongs[countryIndex].artist,
      id: country[0].topSongs[countryIndex].id,
      favClicked: true,
      addedToFav: true
    };

    //toggling fav icons empty/full heart
    this.setState(prevState => {
      const country = prevState.countryBottom;
      country[0].topSongs.forEach(el => {
        if (el.id === parseFloat(target) && el.number === parseFloat(number)) {
          el.favClicked = !el.favClicked;
        } else {
          return;
        }
      });
      return {
        countryBottom: country
      };
    });
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
    const { onSearchCountryChange } = this.props;
    const { countries, countryBottom } = this.state;
    return (
      <div>
        <CountriesList
          countries={this.props.countriesMain}
          onCountryFavClick={this.onCountryFavClick}
        />
        <CountryList
          buttonClick={this.onCountryButtonClick}
          searchChange={onSearchCountryChange}
          countryBottom={countryBottom}
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
