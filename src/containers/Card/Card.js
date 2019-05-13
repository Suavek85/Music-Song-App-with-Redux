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
  removeFav
} from "../../actions";

const mapStateToProps = state => {
  return {
    input: state.searchMusic.input,
    musicStateItemList: state.handleMusicCards.musicStateItemList,
    isLoading: state.handleMusicCards.isLoading,
    cardShow: state.isCardShow.cardShow,
    favsArray: state.handleFavs.favsArray
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
    onRemoveFavs: text => dispatch(removeFav(text))
  };
};

class Card extends Component {
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
    const { input, musicStateItemList, favsArray, cardShow } = this.props;
    return (
      <div>
        <CardList
          onFavClick={this.onCardFavClick}
          cardsShow={cardShow}
          music={musicStateItemList}
          input={input}
        />
        <FavList
          closeFavs={this.onCloseFavs}
          removeFavs={this.onRemoveFavsHandler}
          cardsShow={cardShow}
          music={favsArray}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
