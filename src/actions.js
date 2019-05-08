import {
  CHANGE_INPUT,
  REQUEST_MUSIC_SUCCESS,
  CARD_SHOWS,
  TOGGLE_CARD_FAV,
  ACTIVATE_LOADING,
  REQUEST_MUSIC_SPECIFIC_SUCCESS,
  CHANGE_INPUT_COUNTRY,
  ADD_FAV,
  REMOVE_FAV,
  REQUEST_COUNTRY_SUCCESS
} from "./constants";
import {genericUrl, specificUrl, specificCountryUrl, urlArray} from './containers/API'

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
    dispatch({
      type: REQUEST_MUSIC_SUCCESS,
      payload: res
    });
  });
};

export const requestSpecificMusic = input => dispatch => {
  fetch(specificUrl(input))
    .then(data => {
      return data.json();
    })
    .then(res => {
      dispatch({
        type: REQUEST_MUSIC_SPECIFIC_SUCCESS,
        payload: res
      });
    });
};

export const requestCountry = (text) => dispatch => {
    fetch(specificCountryUrl(text))
      .then(data => {
        return data.json();
      })
      .then(res => {
        dispatch({
          type: REQUEST_COUNTRY_SUCCESS,
          payload: res 
        });
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
