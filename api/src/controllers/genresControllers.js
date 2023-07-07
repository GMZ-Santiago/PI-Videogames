const axios = require("axios");
const { API_KEY } = process.env;

const getGenres = async () => {
  try {
    let getGenres = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    );

    const genres = getGenres.data.resulys.map((g) => g.name);
    return genres;
  } catch (error) {
    return { error: "Not found" };
  }
};

module.exports = { getGenres };
