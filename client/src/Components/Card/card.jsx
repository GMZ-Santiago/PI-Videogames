// import React from 'react';

// function Card ({id, name, platforms, releasedData, rating, genres, image}) {

//   return (
//     <div className="card-container">
//       <h2>{name}</h2>
//       {id && <h3>Id: {id}</h3>}
//       {platforms && <h3>{platforms}</h3>}
//       {releasedData && <h3>{releasedData}</h3>}
//       {rating && <h3>{rating}</h3>}
//       {genres && <h3>{genres}</h3>}
//       {/* <div className="cardImage">
//         {image && <img src={image} alt="image del personaje" height="300px" />} */}
//       {/* </div> */}
//     </div>
//   );
// }

// export default Card
import React from "react";
import style from "./card.module.css";

function Card(props) {
  return (
    <div className={style.card}>
      <img src={props.background_image} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.gender}</p>
    </div>
  );
}

export default Card;
