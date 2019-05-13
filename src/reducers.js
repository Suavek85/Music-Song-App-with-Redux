import update from "immutability-helper";
import {
  CHANGE_INPUT,
  CHANGE_INPUT_COUNTRY,
  REQUEST_MUSIC_SUCCESS,
  REQUEST_MUSIC_SPECIFIC_SUCCESS,
  CARD_SHOWS,
  TOGGLE_CARD_FAV,
  ADD_FAV,
  REMOVE_FAV,
  ACTIVATE_LOADING,
  REQUEST_COUNTRY_SUCCESS
} from "./constants";
import { musicState } from "./components/Card/CardState";
import { countriesMain } from "./components/Country/CountriesStateStyle";

const initialStateSearch = {
  input: "Justin Bieber"
};

const initialStateCountry = {
  input: ""
};

const initialStateCard = {
  cardShow: true
};

const initialFavArray = {
  favsArray: []
};

export const handleCountries = (state = countriesMain, action = {}) => {
  switch (action.type) {
    case REQUEST_COUNTRY_SUCCESS:
    return update(state, {
      [action.payload.no]: {
          topSongs: {
            0: {
              artist: { $set: action.payload.res.message.body.track_list[0].track.artist_name },
              track: { $set: action.payload.res.message.body.track_list[0].track.track_name },
              album: { $set: action.payload.res.message.body.track_list[0].track.album_name }
            },
            1: {
              artist: { $set: action.payload.res.message.body.track_list[1].track.artist_name },
              track: { $set: action.payload.res.message.body.track_list[1].track.track_name },
              album: { $set: action.payload.res.message.body.track_list[1].track.album_name }
            },
            2: {
              artist: { $set: action.payload.res.message.body.track_list[2].track.artist_name },
              track: { $set: action.payload.res.message.body.track_list[2].track.track_name },
              album: { $set: action.payload.res.message.body.track_list[2].track.album_name }
            }
          }
        }
      });
    default:
      return state;
  }
};

export const handleMusicCards = (state = musicState, action = {}) => {
  switch (action.type) {
    case REQUEST_MUSIC_SUCCESS:
      return Object.assign({}, state, {
        musicStateItemList: state.musicStateItemList.map((el, i) => {
          return {
            ...el,
            track: action.payload.message.body.track_list[i].track.track_name,
            album: action.payload.message.body.track_list[i].track.album_name,
            artist: action.payload.message.body.track_list[i].track.artist_name,
            id: action.payload.message.body.track_list[i].track.track_id,
            favClicked: false,
            addedToFav: false
          };
        }),
        isLoading: false
      });
    case REQUEST_MUSIC_SPECIFIC_SUCCESS:
      return Object.assign({}, state, {
        musicStateItemList: state.musicStateItemList.map((el, i) => {
          return {
            ...el,
            track: action.payload.message.body.track_list[i].track.track_name,
            album: action.payload.message.body.track_list[i].track.album_name,
            artist: action.payload.message.body.track_list[i].track.artist_name,
            id: action.payload.message.body.track_list[i].track.track_id,
            favClicked: false,
            addedToFav: false
          };
        }),
        isLoading: false
      });
    case TOGGLE_CARD_FAV:
      return Object.assign({}, state, {
        musicStateItemList: action.payload
      });
    case ACTIVATE_LOADING:
      return Object.assign({}, state, {
        isLoading: true
      });
    default:
      return state;
  }
};

export const handleFavs = (state = initialFavArray, action = {}) => {
  switch (action.type) {
    case ADD_FAV:
      return Object.assign({}, state, {
        favsArray: action.payload
      });
    case REMOVE_FAV:
      return Object.assign({}, state, {
        favsArray: action.payload
      });
    default:
      return state;
  }
};

export const isCardShow = (state = initialStateCard, action = {}) => {
  switch (action.type) {
    case CARD_SHOWS:
      return Object.assign({}, state, {
        cardShow: action.payload
      });
    default:
      return state;
  }
};

export const searchMusic = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return Object.assign({}, state, {
        input: action.payload
      });
    default:
      return state;
  }
};

export const searchCountry = (state = initialStateCountry, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_COUNTRY:
      return Object.assign({}, state, {
        inputCountry: action.payload
      });
    default:
      return state;
  }
};
