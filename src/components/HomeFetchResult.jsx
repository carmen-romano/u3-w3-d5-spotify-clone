import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { songOnPlay } from "../redux/actions";

// eslint-disable-next-line react/prop-types
const HomeFetchResult = ({ query }) => {
  const [songs, setSongs] = useState([]);
  const dispatch = useDispatch();

  const fetchSongs = async () => {
    try {
      const baseEndpoint =
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
      const response = await fetch(baseEndpoint + query);
      if (!response.ok) {
        throw new Error("Errore main fetch");
      }
      const fetchedSongs = await response.json();
      setSongs(fetchedSongs.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSongClick = song => {
    dispatch(songOnPlay(song));
  };

  return (
    <Col className="col-12 col-md-9 offset-md-3 mainPage">
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
        {songs.slice(0, 3).map(song => (
          <Col key={song.id} className="text-center">
            <img
              src={song.album.cover_medium}
              alt={song.title}
              onClick={() => handleSongClick(song)}
            />
            <p>{song.title}</p>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default HomeFetchResult;
