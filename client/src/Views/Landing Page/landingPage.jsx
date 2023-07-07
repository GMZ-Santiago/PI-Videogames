import React from "react";
import s from "./landingPage.module.css";
import { Link } from "react-router-dom";

function landingPage() {
  return (
    <div>
      <header>
        <nav>
          <span className={s.logo}>GLOBAL GAMES</span>
          <Link to="/home" className={s.ingresar}>
            Ingresar
          </Link>
        </nav>
      </header>

      <main>
        <div className={s.main_left}>
          <h1 className={s.titulo}>
            Bienvenidos al<span className={s.titulo_inicio}>universo</span>de
            los videojuegos!
          </h1>
          <p className={s.sub_titulo}>
            Encontraras la mayor diversidad en generos de videojuegos
          </p>
          <Link to="/home" className={s.ingresar_grande}>
            Presioná el botón para iniciar
          </Link>
        </div>

        <div className={s.main_right}>
          <div className={s.div_img}>
            <img className={s.hero} src={img} alt="img" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default landingPage;
