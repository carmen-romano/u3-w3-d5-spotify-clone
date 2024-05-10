import { GET_SONGS } from "../actions";

const initialState = {
  content: [],
  query: "",
};

const searchReduce = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};
export default searchReduce;
