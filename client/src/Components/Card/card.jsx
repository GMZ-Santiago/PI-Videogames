import React from "react";
import s from "../Card/card.module.css";
import { Link } from "react-router-dom";

function card({ id, image, name, platforms, genres, rating }) {
  const renderGenres = () => {
    if (Array.isArray(genres)) {
      return genres.join(", ");
    }
    return "No se encuentran generos";
  };
  return (
    <div className={s.card}>
      <img scr={image} alt={name} className={s.card_image} />
      <div style={{ textDecoration: "none" }} className={s.card_content}>
        <h3 style={{ textDecoration: "none" }} className={s.nombre}>
          {name}
        </h3>
        <p style={{ textDecoration: "none" }} className={s.platforms}>
          {platforms}
        </p>
        <p style={{ textDecoration: "none" }} className={s.genres}>
          {renderGenres()}
        </p>
        <Link to={`/detail/${id}`} className={s.link}>
          {" "}
          <span className={s.leer_mas}>Más detalles</span>{" "}
        </Link>
      </div>
    </div>
  );
}

export default card;