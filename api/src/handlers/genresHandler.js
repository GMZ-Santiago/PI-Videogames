const { getGenres } = require("../controllers/genresControllers");
const { Genres } = require("../db");

const getAllGenres = async (req, res) => {
  try {
    const getGenresGames = await getGenres();
  
    res.status(200).json(getGenresGames);
  } catch (error) {
    res
      .status(404)
      .send("Lo sentimos! no hemos encontrado el genero que buscas");
  }
};

module.exports = {
  getAllGenres,
};
