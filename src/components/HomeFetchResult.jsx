import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

const HomeFetchResult = query => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const baseEndpoint =
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
        const response = await fetch(baseEndpoint + query);
        if (!response.ok) {
          throw new Error("Errore main fetch");
        }
        const fetchedSongs = await response.json();
        setSongs(fetchedSongs.data || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSongs();
  }, [query]);

  return (
    <Col className="col-12 col-md-9 offset-md-3 mainPage">
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
        {songs.slice(0, 3).map(song => (
          <Col key={song.id} className="text-center">
            <img src={song.album.cover_medium} alt={song.title} />
            <p>{song.title}</p>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default HomeFetchResult;
