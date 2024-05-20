import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteFromFavouritesAction } from "../redux/actions";

const BraniPreferiti = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favourites = useSelector(state => state.favourites.favourites);

  const handleFavouriteClick = id => {
    dispatch(deleteFromFavouritesAction(id));
  };

  return (
    <div>
      <h3 className="text-white fs-2 text-center my-3">
        I tuoi brani preferiti
      </h3>
      <svg
        onClick={() => navigate("/")}
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
                <p>Rimuovi dai preferiti </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => handleFavouriteClick(favourite.image.id)}
                  fill="green"
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
