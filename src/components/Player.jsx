import { Col, Container, NavLink, Row } from "react-bootstrap";
import { addFavouriteSong } from "../redux/actions";

const Player = () => {
  const handleAddToFavorites = song => {
    const dispatch = useDispatch();
    console.log(song);
    dispatch(addFavouriteSong(song));
  };
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col className="col-lg-10 offset-lg-2">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col md={4} className="col-6 playerControls">
              <div className="d-flex">
                <NavLink href="#">
                  <img
                    src="/src/assets/playerbuttons/shuffle.png"
                    alt="shuffle"
                  />
                </NavLink>
                <NavLink href="#">
                  <img src="/src/assets/playerbuttons/prev.png" alt="prev" />
                </NavLink>
                <NavLink href="#">
                  <img src="/src/assets/playerbuttons/play.png" alt="play" />
                </NavLink>
                <NavLink href="#">
                  <img src="/src/assets/playerbuttons/next.png" alt="next" />
                </NavLink>
                <NavLink href="#">
                  <img
                    src="/src/assets/playerbuttons/repeat.png"
                    alt="repeat"
                  />
                </NavLink>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
              <div className="mb-2 mt-2">
                <p className="artist text-light">
                  Artist
                  <i
                    className="bi bi-heart"
                    onClick={() => handleAddToFavorites(song)}
                  ></i>
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Player;
