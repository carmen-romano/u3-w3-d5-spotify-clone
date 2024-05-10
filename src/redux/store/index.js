import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchReduce from "../reducers/searchReduce";
import songReduce from "../reducers/songReduce";
import { favouritesReducer } from "../reducers/favouriteSongReduce";

const bigReducer = combineReducers({
  favourites: favouritesReducer,
  searchSong: searchReduce,
  songOnPlay: songReduce,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
