import { ADD_CLICKED_SONG } from "../actions";

const initialState = {
  content: [],
};

const songReduce = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLICKED_SONG:
      return {
        ...state,
        clickedSong: action.payload,
      };
    default:
      return state;
  }
};

export default songReduce;
