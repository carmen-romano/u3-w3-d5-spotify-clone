import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import { Container } from "react-bootstrap";
import MainSection from "./components/MainSection";
import Player from "./components/Player";
import HomeFetchResult from "./components/HomeFetchResult";
import SongResult from "./components/SongResult";

function App() {
  return (
    <>
      <Container fluid>
        <MyNavbar />
        <MainSection />
        <SongResult />
        <HomeFetchResult query={"rock"} />
        <HomeFetchResult query={"rock"} />
        <HomeFetchResult query={"rock"} />
        <HomeFetchResult query={"rock"} />
        <Player />
      </Container>
    </>
  );
}

export default App;
