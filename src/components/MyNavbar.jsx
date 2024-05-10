import {
  Container,
  Nav,
  Navbar,
  Button,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";

import SearchRes from "./SearchRes";

const MyNavbar = () => {
  return (
    <Row>
      <Col className="col col-2">
        <Navbar
          className="navbar-expand-md fixed-left justify-content-between"
          id="sidebar"
        >
          <Container className="flex-column align-items-start">
            <Nav.Link className="navbar-brand" href="#">
              <img
                src="/src/assets/logo/logo.png"
                alt="Spotify Logo"
                width="131"
                height="40"
              />
            </Nav.Link>
            <Button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </Button>
            <Navbar.Collapse id="navbarNavAltMarkup">
              <Nav className="navbar-nav">
                <ListGroup>
                  <li>
                    <Nav.Link
                      className="nav-item nav-link d-flex align-items-center"
                      href="#"
                    >
                      <i className="bi bi-house-door-fill"></i>&nbsp; Home
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link
                      className="nav-item nav-link d-flex align-items-center"
                      href="#"
                    >
                      <i className="bi bi-book-fill"></i>&nbsp; Your Library
                    </Nav.Link>
                  </li>
                  <li>
                    <SearchRes />
                  </li>
                </ListGroup>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <div className="nav-btn">
            <Button className="btn signup-btn">Sign Up</Button>
            <Button className="btn login-btn">Login</Button>
            <Nav.Link href="#" className="d-inline-block">
              Cookie Policy
            </Nav.Link>
            |
            <Nav.Link href="#" className="d-inline-block">
              Privacy
            </Nav.Link>
          </div>
        </Navbar>
      </Col>
    </Row>
  );
};

export default MyNavbar;
