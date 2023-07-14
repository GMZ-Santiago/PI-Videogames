const {
  getVideogameById,
  createVideogame,
  getAllVideogames,
  searchByName,
} = require("../controllers/videogamesControllers");
const { Genres, Videogame } = require("../db");

const getVideogamesHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const api = await getAllVideogames();
    res.status(200).json(api);
    // const results = name ? await searchByName(name) : await getAllVideogames();
    // res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const postVideogame = async (req, res) => {
  try {
      const { name, description, released, rating, platform, genres, image } = req.body;
      const createdGame = await createVideogame(name, description, released, rating, platform, genres, image)
      res.status(200).json(createdGame)
  } catch (error) {
      res.status(500).send({error: error.message}); 
  }
}

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
