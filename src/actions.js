import {
  CHANGE_INPUT,
  REQUEST_MUSIC_SUCCESS,
  CARD_SHOWS,
  TOGGLE_CARD_FAV,
  ACTIVATE_LOADING,
  REQUEST_MUSIC_SPECIFIC_SUCCESS,
  CHANGE_INPUT_COUNTRY,
  ADD_FAV,
  REMOVE_FAV
} from "./constants";

const apiKey = "22d91306931ee5a074eb08a71662cc98";
const genericUrl = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc & apikey=${apiKey}`;
export const specificUrl = input => {
  return `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=${input}&page_size=3&page=1&s_track_rating=desc & apikey=${apiKey}`;
};

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

export const setInputCountry = text => ({
  type: CHANGE_INPUT_COUNTRY,
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

export const requestSpecificMusic = input => dispatch => {
  fetch(specificUrl(input))
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
        dispatch({
          type: REQUEST_MUSIC_SPECIFIC_SUCCESS,
          payload: musicStateItemList
        });
      }
    });
};

export const isCardShow = text => ({
  type: CARD_SHOWS,
  payload: text
});

export const toggleCardFav = text => ({
  type: TOGGLE_CARD_FAV,
  payload: text
});

export const activateLoading = () => ({
  type: ACTIVATE_LOADING
});

export const addFav = text => ({
  type: ADD_FAV,
  payload: text
});

export const removeFav = text => ({
  type: REMOVE_FAV,
  payload: text
});
