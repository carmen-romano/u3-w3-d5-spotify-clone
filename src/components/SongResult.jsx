import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

let SongResult = () => {
  const tracks = useSelector(state => state.searchSong.data);
  console.log(tracks);

  return (
    <Container className="text-center text-light">
      <Row className="g-2 text-center">
        <div>
          <h3 className="mt-4">Sfoglia tutto</h3>
        </div>
        <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
          {tracks &&
            tracks.map(track => (
              <Col key={track.id} className="col">
                <div className="p-3">
                  <img
                    className="img-fluid"
                    src={track.album.cover_medium}
                    alt="Album cover"
                  />
                </div>
              </Col>
            ))}
        </Row>
      </Row>
    </Container>
  );
};
export default SongResult;
