import React, { Component } from "react";
import CardList from "../../components/Card/CardList";
import FavList from "../../components/Card/FavList";

import { connect } from "react-redux";
import {
  requestMusic,
  requestSpecificMusic,
  isCardShow,
  toggleCardFav,
  activateLoading,
  addFav,
  removeFav,
  showPopup
} from "../../actions";

const mapStateToProps = state => {
  return {
    input: state.searchMusic.input,
    musicStateItemList: state.handleMusicCards.musicStateItemList,
    isLoading: state.handleMusicCards.isLoading,
    isError: state.handleMusicCards.isError,
    cardShow: state.isCardShow.cardShow,
    favsArray: state.handleFavs.favsArray,
    popup: state.handlePopup.popupDisplay,
    artist: state.handlePopup.urlArtist,
    track: state.handlePopup.urlTrack
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestMusic: () => dispatch(requestMusic()),
    onRequestSpecificMusic: input => dispatch(requestSpecificMusic(input)),
    onCardShow: text => dispatch(isCardShow(text)),
    onToggleCardFav: text => dispatch(toggleCardFav(text)),
    onActivateLoading: () => dispatch(activateLoading()),
    onAddFav: text => dispatch(addFav(text)),
    onRemoveFavs: text => dispatch(removeFav(text)),
    onShowPopup: (yes, artist, track) => dispatch(showPopup(yes, artist, track))
  };
};

class Card extends Component {
  componentDidMount() {
    this.props.onRequestMusic();
    this.props.onCardShow(true);
  }

  onOpenPopup = event => {
    const artist = event.target.parentElement.nextSibling.nextSibling.childNodes[1].innerHTML;
    const track = event.target.parentElement.nextSibling.nextSibling.childNodes[2].childNodes[1].innerHTML;
    this.props.onShowPopup(true, artist, track);
  };

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

  onCloseFavs = () => {
    this.props.onCardShow(true);
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

  render() {
    const {
      input,
      musicStateItemList,
      favsArray,
      cardShow,
      isError
    } = this.props;
    return (
      <div>
        <CardList
          onFavClick={this.onCardFavClick}
          cardsShow={cardShow}
          music={musicStateItemList}
          input={input}
          isError={isError}
          onOpenPopup={this.onOpenPopup}
        />
        <FavList
          closeFavs={this.onCloseFavs}
          removeFavs={this.onRemoveFavsHandler}
          cardsShow={cardShow}
          music={favsArray}
          onOpenPopup={this.onOpenPopup}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
