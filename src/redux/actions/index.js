export const ADD_FAVOURITE_SONG = "ADD_FAVOURITE_SONG";
export const REMOVE_FAVOURITE_SONG = "REMOVE_FAVOURITE_SONG";
export const GET_SONGS = "GET_SONGS";
export const ADD_CLICKED_SONG = "ADD_CLICKED_SONG";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const DELETE_FROM_FAVOURITES = "DELETE_FROM_FAVOURITES";

export const addToFavouritesAction = track => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: track,
  };
};

//export const deleteFromFavouritesAction = track => {
// return {
//    type: DELETE_FROM_FAVOURITES,
//   payload: track,
//  };
//};

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
      console.error("Errore durante la ricerca delle canzoni:", error);
    }
  };
};

export const songOnPlay = (image, title) => ({
  type: ADD_CLICKED_SONG,
  payload: { image, title },
});
