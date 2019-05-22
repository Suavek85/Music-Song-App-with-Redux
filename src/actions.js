import axios from 'axios';
import {
  CHANGE_INPUT,
  REQUEST_MUSIC_SUCCESS,
  REQUEST_MUSIC_ERROR,
  CARD_SHOWS,
  TOGGLE_CARD_FAV,
  TOGGLE_COUNTRY_FAV,
  TOGGLE_COUNTRY_SELECTED_FAV,
  ACTIVATE_LOADING,
  REQUEST_MUSIC_SPECIFIC_SUCCESS,
  REQUEST_MUSIC_SPECIFIC_ERROR,
  CHANGE_INPUT_COUNTRY,
  ADD_FAV,
  REMOVE_FAV,
  REQUEST_COUNTRY_SUCCESS,
  REQUEST_SELECTED_COUNTRY_SUCCESS,
  HIDE_POPUP
} from "./constants";
import { genericUrl, specificUrl, specificCountryUrl } from "./containers/API";


export const hidePopup = () => ({
  type: HIDE_POPUP,
  payload: false
});

export const setInput = text => ({
  type: CHANGE_INPUT,
  payload: text
});

export const setInputCountry = text => ({
  type: CHANGE_INPUT_COUNTRY,
  payload: text
});


export const requestMusic = () => dispatch => {
  axios.get(genericUrl)
  .then(res => {
    dispatch({
      type: REQUEST_MUSIC_SUCCESS,
        payload: res
    });
  })
  .catch(error => {
    console.log(error);
    dispatch({
      type: REQUEST_MUSIC_ERROR
    });
  })
};

export const requestSpecificMusic = input => dispatch => {
  axios.get(specificUrl(input))
  .then(res => {
    dispatch({
      type: REQUEST_MUSIC_SPECIFIC_SUCCESS,
        payload: res
    });
  })
  .catch(error => {
    console.log(error);
    dispatch({
      type: REQUEST_MUSIC_SPECIFIC_ERROR,
    });
  })
};

export const requestSelectedCountry = (text) => dispatch => {
  axios.get(specificCountryUrl(text))
  .then(res => {
    dispatch({
      type: REQUEST_SELECTED_COUNTRY_SUCCESS,
      payload:  res, 
    });
  })
};

export const requestCountry = (text, no) => dispatch => {
  axios.get(specificCountryUrl(text))
  .then(res => {
    dispatch({
      type: REQUEST_COUNTRY_SUCCESS,
        payload: { res, no }
    });
  })
};

export const isCardShow = text => ({
  type: CARD_SHOWS,
  payload: text
});

export const toggleCardFav = text => ({
  type: TOGGLE_CARD_FAV,
  payload: text
});

export const toggleCountryFav = text => ({
  type: TOGGLE_COUNTRY_FAV,
  payload: text
});

export const toggleCountrySelectedFav = text => ({
  type: TOGGLE_COUNTRY_SELECTED_FAV,
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