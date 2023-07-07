const {
  getVideogameById,
  createVideogame,
  getAllVideogames,
  searchByName
} = require("../controllers/videogamesControllers");
const { Genres, Videogame } = require("../db");

const getVideogamesHandler = async (req, res) => {
  const { name } = req.query;

  const results = name ? await searchByName(name) : await getAllVideogames()
  res.status(200).json(results);
};

const postVideogame = async (req, res) => {
  try {
    const {
      name,
      description,
      platforms,
      releaseData,
      created,
      rating,
      image,
      genres,
    } = req.body;
    const newGame = await createVideogame(
      name,
      description,
      platforms,
      releaseData,
      created,
      rating,
      image,
      genres
    );
    res.status(200).json(newGame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const getVideogameId = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "bdd" : "api";

  try {
    const videogames = await getVideogameById(id, source);
    res.status(200).json(videogames);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getVideogamesHandler,
  getVideogameId,
  postVideogame,
};
