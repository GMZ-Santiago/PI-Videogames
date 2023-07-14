// import Card from "../Card/Card";

// function Cards({ getAllVideogames }) {
//   const videogamesList = getAllVideogames;

//   return (
//     <div className="card-list">
//       {videogamesList?.map((game) => {
//         return <Card game={game} />;
//       })}
//     </div>
//   );
// }

// export default Cards;
import { useSelector } from "react-redux";
import style from "./cards.module.css"
import Card from "../Card/Card";

const Cards = () => {
    const videogames = useSelector(state=>state.allGames)
    console.log(videogames)
    return (
        <div className={style.container}>
            {videogames.map(videogame=> {
                return <Card
                id={videogame.id}
                name={videogame.name}
                background_image={videogame.background_image}
                description={videogame.description}
                rating={videogame.rating}
                releaseDate={videogame.release_date}
                platforms={videogame.platforms}
                genres={videogame.genres}
                />
            })}
        </div>
    )
}

export default Cards;

