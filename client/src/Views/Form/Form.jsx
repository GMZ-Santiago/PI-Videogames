import { useState } from "react";
import axios from "axios";
import styles from "./Form.module.css";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    genres: [],
    platforms: [],
    image: ""
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    validate({ ...form, [property]: value });
    setForm({ ...form, [property]: value });
  };

  const validate = (form) => {

    if(!/(http|https|ftp|ftps):\/\/[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,3}(\/\S*)?/.test(form.image)) {
      // errors.image = 'URL de imágen inválida'
      console.log("URL válida")
  }else{
    console.log("URL de imágen inválida")
  }
}

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/videojuegos", form)
      .then((res) => alert(res))
      .catch((err) => alert(err));
  };

  return (
    <div className={styles.formBox}>

      <h2 className={styles.formTitlePage}>CREA TU VIDEOJUEGO</h2>

      <div className={styles.formContainer}>
          <h3 className={styles.qrTitle}>Escaneá y crea tu juego</h3>
        <div className={styles.qrBox}>
          <img
            className={styles.qr}
            src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png"
            alt="qr"
          />
        </div>
        <form onSubmit={submitHandler}>
          <div>
            <label>Nombre: </label>
            <input
              type="text"
              value={form.name}
              onChange={changeHandler}
              name="name"
            />
          </div>

          <div>
            <label>Descripción: </label>
            <input
              type="text"
              value={form.description}
              onChange={changeHandler}
              name="description"
            />
          </div>

          <div>
            <label>Fecha de lanzamiento: </label>
            <input
              type="date"
              value={form.released}
              onChange={changeHandler}
              name="released"
            />
          </div>

          <div>
            <label>Rating: </label>
            <input
              type="text"
              value={form.rating}
              onChange={changeHandler}
              name="rating"
            />
          </div>

          <div>
            <label>Géneros: </label>
            <input
              type="text"
              value={form.genres}
              onChange={changeHandler}
              name="genres"
            />
          </div>

          <div>
            <label>Plataformas: </label>
            <input
              type="text"
              value={form.platforms}
              onChange={changeHandler}
              name="platforms"
            />
          </div>

          <div>
            <label>Imágen: </label>
            <input
              type="text"
              value={form.image}
              onChange={changeHandler}
              name="image"
            />
            {/* {errors.image ? <span>{errors.image}</span> : null} */}
          </div>
          <button type="submit">CREAR</button>
        </form>
      </div>
    </div>
  );
};

export default Form;