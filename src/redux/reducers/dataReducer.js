import {
  SET_ITEMS,
  SET_ITEM,
  DELETE_ITEM,
  CREATE_ITEM,
  LOADING_DATA,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  RESET_COUNT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT,
} from "../types";

const initialState = {
  item: {},
  items: [],
  cartItems: [],
  filteredItems: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ITEM:
      return {
        ...state,
        item: action.payload,
        loading: false,
      };
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case DELETE_ITEM:
      let index2 = state.items.findIndex(
        (item) => item.itemId === action.payload
      );
      state.posts.splice(index2, 1);
      return {
        ...state,
      };
    case INCREMENT_COUNT:
      return {
        ...state,
        item: {
          ...state.item,
          quantity: state.item.quantity + 1,
        },
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        item: {
          ...state.item,
          quantity: state.item.quantity - 1,
        },
      };
    case RESET_COUNT:
      return {
        ...state,
        item: {
          ...state.item,
          quantity: 0,
        },
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        loading: false,
      };
    case REMOVE_FROM_CART:
      let index = state.cartItems.findIndex(
        (item) => item.itemId === action.payload
      );
      state.cartItems.splice(index, 1);
      return {
        ...state,
      };
    case CHECKOUT:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
}
