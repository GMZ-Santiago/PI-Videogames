import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Funcionalidades.module.css";

const Funcionalidades = ({ handleFilter, handleSort, handleSource }) => {
  const dispatch = useDispatch();
  const generos = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getByGenres());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <select value="Ordenar por" className={s.select} id="sort" onChange={(e) => handleSort(e)}>
        <option value="">Ordenar por</option>
        <option value="All">Todos</option>
        <option value="A-Z">A - Z</option>
        <option value="Z-A">Z - A</option>
        <option value="RatingAsc">Mayor rating</option>
        <option value="RatingDesc">Menor rating</option>
      </select>

      <select value='Géneros' className={s.select} id="genre" onChange={(e) => handleFilter(e)}>
        <option value="">Géneros</option>
        {generos &&
          generos.map((g) => {
            return (
              <option key={g.id} value={g.name}>
                {g.name}
              </option>
            );
          })}
      </select>

      <select value='Filtrar' className={s.select} id="filter" onChange={(e) => handleSource(e)}>
        <option value="">Filtrar</option>
        <option value="api">API</option>
        <option value="created">Created</option>
      </select>
    </div>

  );
};

export default Funcionalidades;
