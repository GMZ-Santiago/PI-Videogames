// import axios from "axios";

// export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
// const getVideogames = () => {
//   return async function (dispatch) {
//     const apiData = await axios.get("http://localhost:3001/videogames");
//     const videogames = apiData.data;
//     dispatch({ type: GET_VIDEOGAMES, payload: videogames });
//   };
// };

// export const getVideogame = (id) => {
//   return async function (dispatch) {
//     const apiData = await axios.get(`http://localhost:3001/videogames/${id}`);
//     const videogame = apiData.data;
//     dispatch({ type: "GET_VIDEOGAME", payload: videogame });
//   };
// };

// // export const filterBySource = () => {
// //   dispatch({ type: "FILTER_BY_SOURCE" });
// // };

// export default getVideogames;

import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";

export function getVideogames() {
  return async function(dispatch) {
    const response = await axios (
      "http://localhost:3001/videogames"
    )
    return dispatch({
      type : "GET_VIDEOGAMES",
      payload: response.data,
    })
  }
}

export default getVideogames
