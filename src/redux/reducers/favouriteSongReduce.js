import { ADD_FAVOURITE_SONG, REMOVE_FAVOURITE_SONG } from "../actions";

const initialState = {
  content: [],
};
const favouriteSongReduce = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE_SONG:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_FAVOURITE_SONG:
      return {
        ...state,
        content: state.content.filter((_, i) => i !== action.payload),
      };

    default:
      return state;
  }
};
export default favouriteSongReduce;
