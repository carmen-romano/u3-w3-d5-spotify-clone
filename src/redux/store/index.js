import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteSongReduce from "../reducers/favouriteSongReduce";
import searchReduce from "../reducers/searchReduce";

const bigReducer = combineReducers({
  favouriteSong: favouriteSongReduce,
  searchSong: searchReduce,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
