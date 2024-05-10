import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePg from "./components/HomePg";
import SongResult from "./components/SongResult";
import BraniPreferiti from "./components/BraniPreferiti";

function App() {
  return (
    <>
      <Container fluid>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePg />} />
            <Route path="/result" element={<SongResult />} />
            <Route path="/preferiti" element={<BraniPreferiti />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
