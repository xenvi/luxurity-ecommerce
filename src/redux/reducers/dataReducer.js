import {
  SET_ITEMS,
  SET_ITEM,
  DELETE_ITEM,
  CREATE_ITEM,
  LOADING_DATA
} from "../types";

const initialState = {
  item: {},
  items: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ITEM:
      return {
        ...state,
        item: action.payload,
        loading: false
      };
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case CREATE_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case DELETE_ITEM:
      let index2 = state.items.findIndex(
        item => item.itemId === action.payload
      );
      state.posts.splice(index2, 1);
      return {
        ...state
      };
    default:
      return state;
  }
}
