import React from "react";
import s from './Created.module.css';
import { Link } from "react-router-dom";

function Created() {
  return (
    <div className={s.container}>
      <div className={s.link_container}>
      <Link style={{ textDecoration: "none" }} className={s.link} to={"/createGame"}>
        CREA UN NUEVO<br /><span>VIDEOJUEGO</span>
      </Link>
      </div>
      

    </div>
  );
}

export default Created;
