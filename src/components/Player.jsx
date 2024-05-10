import { Col, Container, NavLink, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavouritesAction } from "../redux/actions";

const Player = () => {
  const trackOnPlay = useSelector(state => state.songOnPlay.clickedSong);
  const dispatch = useDispatch();
  const favourites = useSelector(state => state.favourites.favourites);
  console.log(favourites);

  const isFavourite = favourites?.some(
    favourite => favourite.image.id === trackOnPlay.id
  );
  console.log(isFavourite);

  const handleFavouriteClick = () => {
    if (!isFavourite) {
      dispatch(addToFavouritesAction(trackOnPlay));
    }
  };

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col className="col-lg-10 offset-lg-2">
          <Row className="h-100  justify-content-center align-items-center">
            <Col md={4} className="col-6 playerControls">
              <div className="player">
                {trackOnPlay && (
                  <>
                    <img
                      src={trackOnPlay.image.album.cover_small}
                      alt="track"
                      width={40}
                      className="mt-1"
                    />
                    <p className="artist text-light mt-2 mb-1">
                      {trackOnPlay.image.title}
                    </p>
                  </>
                )}
              </div>
            </Col>
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
            </Col>
            <Col md={4} className="col-6 playerControls">
              <div className="player">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleFavouriteClick}
                  fill={isFavourite ? "green" : "white"}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 svg"
                  width={30}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                <Link to={"/preferiti"}>Brani che ti piacciono</Link>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
