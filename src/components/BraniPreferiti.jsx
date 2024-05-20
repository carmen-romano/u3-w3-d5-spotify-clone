import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BraniPreferiti = () => {
  const navigate = useNavigate();
  const favourites = useSelector(state => state.favourites.favourites);
  console.log(favourites);
  let nav = () => {
    navigate("/");
  };

  return (
    <div>
      <h3 className="text-white fs-2 text-center my-3">
        I tuoi brani preferiti
      </h3>
      <svg
        onClick={nav}
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        fill="white"
        className="bi bi-arrow-return-left mx-3 mb-4 cursor "
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"
        />
      </svg>
      <Col className="col-12 col-md-9 offset-md-3 mainPage">
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
          {favourites.length > 0 ? (
            favourites.map(favourite => (
              <Col key={favourite.image.id} className="text-center">
                <img
                  src={favourite.image.album.cover_big}
                  alt={favourite.image.artist?.name || "Unknown Artist"}
                />
                <p>{favourite.image.title}</p>
                <p>{favourite.image.artist?.name || "Unknown Artist"}</p>
              </Col>
            ))
          ) : (
            <p className="text-white">Non hai brani preferiti</p>
          )}
        </Row>
      </Col>
    </div>
  );
};

export default BraniPreferiti;
