import React, { Component } from "react";

import Header from "../components/Header/Header";
import CardList from "../components/Card/CardList";
import FavList from "../components/Card/FavList";
import Country from "../components/Country/Country";
import Footer from "../components/Footer/Footer";
import { specificCountryUrl } from "./API";
import {
  countriesMain,
  countrySelected
} from "../components/Country/CountriesStateStyle";
import countryCodeArr from "../components/Country/CountryCode";
import Spinner from "../components/Animations/Spinner/Spinner";
import scrollDownSmooth from "../components/Animations/Animations";
import "./App.css";

import { connect } from "react-redux";
import {
  setInput,
  requestMusic,
  requestSpecificMusic,
  isCardShow,
  toggleCardFav,
  activateLoading,
  setInputCountry,
  addFav,
  removeFav
} from "../actions";

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
    onSearchChange: event => dispatch(setInput(event.target.value)),
    onSearchCountryChange: event =>
      dispatch(setInputCountry(event.target.value)),
    onRequestMusic: () => dispatch(requestMusic()),
    onRequestSpecificMusic: input => dispatch(requestSpecificMusic(input)),
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

    // LOAD 3 COUNTRIES SONGS
    const urlArray = [
      specificCountryUrl("br"),
      specificCountryUrl("us"),
      specificCountryUrl("es")
    ];

    urlArray.forEach((el, i) => {
      fetch(el)
        .then(data => {
          return data.json();
        })
        .then(res => {
          this.setState(prevState => {
            const newCountries = prevState.countries;
            newCountries[i].topSongs.forEach((el, i) => {
              el.track = res.message.body.track_list[i].track.track_name;
              el.album = res.message.body.track_list[i].track.album_name;
              el.artist = res.message.body.track_list[i].track.artist_name;
              el.id = res.message.body.track_list[i].track.track_id;
            });
            return {
              countries: newCountries
            };
          });
        });
    });
  }

  onCardFavClick = event => {
    //defining selected song
    const { cardShow } = this.props;
    if (cardShow) {
      const { musicStateItemList } = this.props;
      const target = event.target.dataset.id;
      const songIndex = musicStateItemList.findIndex(
        el => el.id === parseFloat(target)
      );
      const songItem = {
        track: musicStateItemList[songIndex].track,
        album: musicStateItemList[songIndex].album,
        artist: musicStateItemList[songIndex].artist,
        id: musicStateItemList[songIndex].id,
        favClicked: true,
        addedToFav: true
      };

      //conditionally pushing defined song to Favs
      const currentFavsArray = [...this.props.favsArray];
      const alreadyFav = currentFavsArray.find(
        el => el.id === parseFloat(songItem.id)
      );
      if (songItem.favClicked && alreadyFav === undefined) {
        const newsFavsArray = [...currentFavsArray, songItem];
        this.props.onAddFav(newsFavsArray);
      }
      //toggling icon
      const testsub = [...this.props.musicStateItemList];
      testsub[songIndex].favClicked = !testsub[songIndex].favClicked;
      this.props.onToggleCardFav(testsub);
    }
  };

  onHeaderSearch = () => {
    this.props.onActivateLoading();
    this.props.onCardShow(true);
    this.props.onRequestSpecificMusic(this.props.input);
    scrollDownSmooth();
  };

  onCloseFavs = () => {
    this.props.onCardShow(true);
  };

  onShowFavs = () => {
    if (this.props.favsArray.length === 0) {
      return;
    }
    this.props.onCardShow(false);
    scrollDownSmooth();
  };

  onRemoveFavsHandler = event => {
    //removing songs from Favs
    const target = event.target.dataset.id;
    const currentFavsArray = [...this.props.favsArray];
    const removeFavIndex = currentFavsArray.findIndex(
      el => el.id === parseFloat(target)
    );
    currentFavsArray.splice(removeFavIndex, 1);
    this.props.onRemoveFavs(currentFavsArray);
  };

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
    const {
      input,
      onSearchChange,
      onSearchCountryChange,
      musicStateItemList,
      isLoading,
      favsArray,
      cardShow
    } = this.props;
    const { countries, countryBottom } = this.state;
    return (
      <div className="App">
        <Header
          searchChange={onSearchChange}
          headerSearch={this.onHeaderSearch}
          showFavs={this.onShowFavs}
          countFavs={favsArray.length}
        />
        <Spinner loading={isLoading} />
        <CardList
          onFavClick={this.onCardFavClick}
          cardsShow={this.props.cardShow}
          music={musicStateItemList}
          input={input}
        />
        <FavList
          onFavClick={this.onFavClick}
          closeFavs={this.onCloseFavs}
          removeFavs={this.onRemoveFavsHandler}
          cardsShow={cardShow}
          music={favsArray}
        />
        <Country
          countries={countries}
          buttonClick={this.onCountryButtonClick}
          searchChange={onSearchCountryChange}
          countryBottom={countryBottom}
          onCountryFavClick={this.onCountryFavClick}
          onSelectedCountryFavClick={this.onSelectedCountryFavClick}
        />
        <Footer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
