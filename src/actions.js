import { CHANGE_INPUT, REQUEST_MUSIC_SUCCESS, CARD_SHOWS, TOGGLE_CARD_FAV, ACTIVATE_LOADING } from "./constants";

const apiKey = "22d91306931ee5a074eb08a71662cc98";
const genericUrl = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc & apikey=${apiKey}`;

const musicStateItem = el => {
  return {
    track: "Loading...",
    album: "Loading...",
    artist: "Loading...",
    favClicked: false,
    addedToFav: false,
    id: el
  };
};

const musicStateItemList = [
  musicStateItem(0),
  musicStateItem(1),
  musicStateItem(2)
];

const newmusicState = {
  isLoading: true,
  musicStateItemList: musicStateItemList
};

export const setInput = text => ({
  type: CHANGE_INPUT,
  payload: text
});

export const requestMusic = () => dispatch => {
  fetch(genericUrl)
    .then(data => {
      return data.json();
    })
    .then(res => {
      if (res.message.header.available !== 0) {
        newmusicState.musicStateItemList.forEach((el, i) => {
          el.track = res.message.body.track_list[i].track.track_name;
          el.album = res.message.body.track_list[i].track.album_name;
          el.artist = res.message.body.track_list[i].track.artist_name;
          el.id = res.message.body.track_list[i].track.track_id;
          el.favClicked = false;
          el.addedToFav = false;
        });
        dispatch({ type: REQUEST_MUSIC_SUCCESS, payload: musicStateItemList });
      }
    });
};

export const isCardShow = (text) => ({
  type: CARD_SHOWS,
  payload: text
});

export const toggleCardFav = (text) => ({
  type: TOGGLE_CARD_FAV,
  payload: text
});

export const activateLoading = (text) => ({
  type: ACTIVATE_LOADING,
  payload: text
});
