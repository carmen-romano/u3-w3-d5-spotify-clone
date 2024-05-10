import { Col, Nav, Row } from "react-bootstrap";

let MainSection = () => {
  return (
    <Col className="col-12 col-md-9 offset-md-3 mainPage">
      <Row>
        <Col lg={11} className="col-9 mainLinks d-none d-md-flex">
          <Nav.Link href="#">TRENDING</Nav.Link>
          <Nav.Link href="#">PODCAST</Nav.Link>
          <Nav.Link href="#">MOODS AND GENRES</Nav.Link>
          <Nav.Link href="#">NEW RELEASES</Nav.Link>
          <Nav.Link href="#">DISCOVER</Nav.Link>
        </Col>
      </Row>
    </Col>
  );
};
export default MainSection;
