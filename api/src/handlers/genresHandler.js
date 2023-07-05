const { getGenres } = require("../controllers/genresControllers");
const { Genres } = require("../db");

const getAllGenres = async (req, res) => {
  try {
    const getGenresGames = await getGenres();
    const genrePromises = getGenresGames.map((g) => {
      return Genres.findOrCreate({
        where: {
          name: g,
        },
      });
    });

    await Promise.all(genrePromises);
    const allGenres = await Genres.findAll();
    res.status(200).json(allGenres);
  } catch (error) {
    res
      .status(404)
      .send("Lo sentimos! no hemos encontrado el genero que buscas");
  }
};

module.exports = {
  getAllGenres,
};
