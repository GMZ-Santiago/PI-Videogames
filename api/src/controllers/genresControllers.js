const axios = require("axios");
const { API_KEY } = process.env;

const getGenres = async () => {
  try {
    let gamesGenres = [];
    let getGenres = await axios.get(
      `https://api.rawg.io/api/genres?key=dbff6f3d29ba424984abc923dd1365ef`
    );

    const genres = getGenres.data.results.map((g) => g.name);
    gamesGenres.push(genres)
    return gamesGenres;
  } catch (error) {
    return { error: "Not found" };
  }
};

module.exports = { getGenres };
