import {
  CHANGE_INPUT,
  CHANGE_INPUT_COUNTRY,
  REQUEST_MUSIC_SUCCESS,
  REQUEST_MUSIC_SPECIFIC_SUCCESS,
  CARD_SHOWS,
  TOGGLE_CARD_FAV,
  ADD_FAV,
  REMOVE_FAV,
  ACTIVATE_LOADING
} from "./constants";
import { musicState } from "./components/Card/CardState";

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

export const handleMusicCards = (state = musicState, action = {}) => {
  switch (action.type) {
    case REQUEST_MUSIC_SUCCESS:
      return Object.assign({}, state, {
        musicStateItemList: action.payload,
        isLoading: false
      });
    case REQUEST_MUSIC_SPECIFIC_SUCCESS:
      return Object.assign({}, state, {
        musicStateItemList: action.payload,
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
      return Object.assign({}, state, { input: action.payload });
    default:
      return state;
  }
};

export const searchCountry = (state = initialStateCountry, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_COUNTRY:
      return Object.assign({}, state, { inputCountry: action.payload });
    default:
      return state;
  }
};
