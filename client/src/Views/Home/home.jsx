import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../../Components/Cards/cards";
import getVideogames from "../../Redux/actions";
import "./home.module.css";

function Home() {
  const dispatch = useDispatch();
  const getAllVideogames = useSelector((state) => state.allGames);

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

console.log("Estado de AllGames", getAllVideogames)

  return (
    <div className="home">
      <h1 className="home-title">Home Page</h1>
      <Cards allGames={getAllVideogames} />
    </div>
  );
}

export default Home;