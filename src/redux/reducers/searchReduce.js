import { GET_SONGS } from "../actions";

const inizialState = {
  content: [],
  query: "",
};

const searchReduce = (state = inizialState, action) => {
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
