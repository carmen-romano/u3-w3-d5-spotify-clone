import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { songOnPlay } from "../redux/actions";
import Player from "./Player";

let SongResult = () => {
  const dispatch = useDispatch();
  const tracks = useSelector(state => state.searchSong.content.data);

  const handleSongClick = song => {
    dispatch(songOnPlay(song));
  };

  return (
    <Container className="text-center text-light">
      <Row className="g-2 text-center">
        <div>
          <Link to={"/"}>
            <i className="bi bi-arrow-left d-inline-block fs-3 text-light"></i>
          </Link>

          <h3 className="mt-4 d-inline-block  mx-5">Risultati più rilevanti</h3>
        </div>
        <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
          {tracks &&
            tracks.map(track => (
              <Col key={track.id} className="col">
                <div className="p-3">
                  <img
                    className="img-fluid rounded-2"
                    src={track.album.cover_medium}
                    alt="Album cover"
                    onClick={() => handleSongClick(track)}
                  />
                  <hr />
                  <p className="fw-bold fs-5">{track.title}</p>
                </div>
              </Col>
            ))}
        </Row>
      </Row>
      <Player />
    </Container>
  );
};
export default SongResult;
