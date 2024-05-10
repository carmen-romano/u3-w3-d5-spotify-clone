export const ADD_FAVOURITE_SONG = "ADD_FAVOURITE_SONG";
export const REMOVE_FAVOURITE_SONG = "REMOVE_FAVOURITE_SONG";
export const GET_SONGS = "GET_SONGS";

export const addFavouriteSong = songId => {
  return (dispatch, getState) => {
    const state = getState();
    const isAlreadyAdded = state.favouriteCompany.content.includes(songId);

    if (!isAlreadyAdded) {
      dispatch({
        type: ADD_FAVOURITE_SONG,
        payload: songId,
      });
    }
  };
};
export const RemoveFavouriteSong = i => ({
  type: REMOVE_FAVOURITE_SONG,
  payload: i,
});

export const searchSong = query => {
  return async dispatch => {
    try {
      const baseEndpoint =
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
      const response = await fetch(baseEndpoint + query);
      const tracks = response;
      console.log(tracks);
      if (!response.ok) {
        throw new Error("Errore main fetch");
      }
      const fetchSongs = await response.json();
      console.log(fetchSongs);
      dispatch({
        type: GET_SONGS,
        payload: fetchSongs,
      });
    } catch (error) {
      console.log("error");
    }
  };
};
