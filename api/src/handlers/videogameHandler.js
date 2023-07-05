const {
  infoApi,
  dbInfo,
  videogame,
  apiName,
} = require("../controllers/videogamesControllers");
const { Genres, Videogame } = require("../db");

const getVideogamesHandler = async (req, res) => {
  const { search } = req.query;
  let response;

  try {
    search
      ? (response = await getVideogameName(search, res))
      : (response = await infoApi());
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error:
        "Lo sentimos, ha ocurrido un error al obtener la información de los videojuegos",
    });
  }
};

const getVideogameId = async (req, res) => {
  const { idVideogame } = req.params;
  let data = await videogame(idVideogame);

  try {
    data
      ? res.send(data)
      : res
          .status(404)
          .send(
            `No hemos encontrado ningun videojuego con el id ${idVideogame}`
          );
  } catch (error) {
    next(error);
  }
};

const getVideogameName = async (name, res) => {
  try {
    const foundGameApi = await apiName(name);
    const gamesByNameDb = await dbInfo();
    let foundGamesDb = gamesByNameDb.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
    let allResults = foundGamesDb.concat(foundGameApi);
    allResults.length
      ? res.status(200).send(allResults.slice(0, 15))
      : res.status(400).send("No existen videojuegos con el nombre ingresado");
  } catch (error) {
    console.log(error);
  }
};

const postVideogame = async (req, res) => {
  const { name, platform, releaseData, created, rating, image, genres } =
    req.body;
  try {
    const newVideogame = await Videogame.create({
      name,
      platform,
      releaseData,
      created,
      rating,
      image,
    });
    const genresName = await Genres.findAll({
      where: {
        name: genres,
      },
    });
    await newVideogame.addGenre(genresName);
    res.status(200).json({
      message: "Videojuego creado correctamente",
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  getVideogamesHandler,
  getVideogameId,
  getVideogameName,
  postVideogame,
};
