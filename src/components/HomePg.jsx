import HomeFetchResult from "./HomeFetchResult";
import MainSection from "./MainSection";
import MyNavbar from "./MyNavbar";
import Player from "./Player";

let HomePg = () => {
  return (
    <>
      <MyNavbar />
      <MainSection />
      <HomeFetchResult query={"Queen"} />
      <HomeFetchResult query={"Katy Perry"} />
      <HomeFetchResult query={"Eminem"} />
      <Player />
    </>
  );
};
export default HomePg;
