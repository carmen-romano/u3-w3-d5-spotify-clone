import { ADD_TO_FAVOURITES } from "../actions";
import { DELETE_FROM_FAVOURITES } from "../actions";

const initialState = {
  favourites: [],
};

export const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case DELETE_FROM_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.filter(
          item => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
