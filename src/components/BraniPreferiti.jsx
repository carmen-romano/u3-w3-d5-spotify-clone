import { useSelector } from "react-redux";

let BraniPreferiti = () => {
  const favourites = useSelector(state => state.favourites);
  return <div>{favourites.artist}</div>;
};
export default BraniPreferiti;
