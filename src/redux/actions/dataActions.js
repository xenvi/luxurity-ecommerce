import {
  SET_ITEMS,
  SET_ITEM,
  DELETE_ITEM,
  CREATE_ITEM,
  LOADING_DATA
} from "../types";

import axios from "axios";

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
