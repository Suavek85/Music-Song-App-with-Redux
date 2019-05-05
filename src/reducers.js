import { CHANGE_INPUT, REQUEST_MUSIC_SUCCESS, CARD_SHOWS, TOGGLE_CARD_FAV, ACTIVATE_LOADING } from "./constants";
import { musicState } from "./components/Card/CardState";

const initialState = {
  input: "Justin Bieber"
};

const newState = {
  cardShow: true
};

export const searchMusic = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return Object.assign({}, state, { input: action.payload });
    default:
      return state;
  }
};

export const handleMusicCards = (state = musicState, action = {}) => {
  switch (action.type) {
    case REQUEST_MUSIC_SUCCESS:
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
        isLoading: action.payload
      });
    default:
      return state;
  }
};

export const isCardShow = (state = newState, action = {}) => {
  switch (action.type) {
    case CARD_SHOWS:
      return Object.assign({}, state, {
        cardShow: action.payload
      });
    default:
      return state;
  }
};









/*
export const toggleCardFav = (state = musicState, action = {}) => {
  switch (action.type) {
    case TOGGLE_CARD_FAV:
      return Object.assign({}, state, {
        musicStateItemList: action.payload
      });
    default:
      return state;
  }
};


export const doFavClick = (state = musicState, action = {}) => {
  switch (action.type) {
    case CARD_FAV_CLICK:
      return Object.assign({}, state, {
        musicStateItemList: action.payload,
      });
    default:
      return state;
  }
};
*/
