import {
  SET_ITEMS,
  SET_ITEM,
  DELETE_ITEM,
  CREATE_ITEM,
  LOADING_DATA,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  RESET_COUNT,
  ADD_TO_CART
} from "../types";

import axios from "axios";

export const incrementCount = itemId => dispatch => {
  dispatch({ type: INCREMENT_COUNT });
};
export const decrementCount = () => dispatch => {
  dispatch({ type: DECREMENT_COUNT });
};
export const resetCount = () => dispatch => {
  dispatch({ type: RESET_COUNT });
};
export const addToCart = () => dispatch => {
  dispatch({ type: ADD_TO_CART });
};

export const getAllItems = () => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/items")
    .then(res => {
      dispatch({
        type: SET_ITEMS,
        payload: res.data
      });
    })
    .catch(err => console.error(err));
};

export const getItem = itemId => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios.get(`/items/${itemId}`).then(res => {
    dispatch({
      type: SET_ITEM,
      payload: res.data
    });
  });
};

export const createItem = newItem => dispatch => {
  axios
    .post("/item", newItem)
    .then(res => {
      dispatch({
        type: CREATE_ITEM,
        payload: res.data
      });
    })
    .catch(err => console.error(err));
};

export const deleteItem = itemId => dispatch => {
  axios
    .delete(`/item/${itemId}`)
    .then(() => {
      dispatch({
        type: DELETE_ITEM,
        payload: itemId
      });
    })
    .catch(err => console.error(err));
};
