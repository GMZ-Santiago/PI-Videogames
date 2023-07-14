import React from "react";
import styles from "./LandingPage.module.css";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <h1 className={styles.title}>¡Bienvenido a nuestra página de videojuegos!</h1>
      <h4 className={styles.subtitle}>Descubre y disfruta de emocionantes aventuras virtuales.</h4>
      <h4 className={styles.subtitle}>¡Sumérgete en la diversión y comienza a jugar hoy mismo!</h4>
      <NavLink to="/home" className={styles.ingresar_grande}>HAZ CLICK AQUÍ</NavLink>
    </div>
  );
};

export default Landing;