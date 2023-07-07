const { Videogame, Genres } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");
const { API_KEY, URL } = process.env;

const cleanArray = (arr) =>
  arr.map((element) => {
    return {
      id: element.id,
      name: element.name,
      description: element.description,
      platforms: element.platforms,
      releaseData: element.releaseData,
      created: false,
      rating: element.rating,
      image: element.image,
      genres: element.genres,
    };
  });

const createVideogame = async (
  name,
  description,
  platforms,
  releaseData,
  created,
  rating,
  image,
  genres
) =>
  await Videogame.create({
    name,
    description,
    platforms,
    releaseData,
    created,
    rating,
    image,
    genres,
  });

const getVideogameById = async (id, source) => {
  const videogames =
    source === "api"
      ? await axios.get(`https://api.rawg.io/api/videogames/${API_KEY}`).data
      : await Videogame.findByPk(id);

  return videogames;
};

const getAllVideogames = async () => {
  const databaseVideogames = Videogame.findAll();

  const apiVideogamesRaw = (
    await axios.get(`https://api.rawg.io/api/videogames`)
  ).data;

  const apiVideogames = cleanArray(apiVideogamesRaw);
  return [...databaseVideogames, ...apiVideogames];
};

const searchByName = async (name) => {
  const databaseVideogames = await Videogame.findAll({ where: { name: name } });

  const apiVideogamesRaw = (
    await axios.get(`https://api.rawg.io/api/videogames`)
  ).data;

  const apiVideogames = cleanArray(apiVideogamesRaw);

  const filteredApi = apiVideogames.filter((videogame) => videogame.name.toLowerCase().includes(name.toLowerCase()));

  return [...filteredApi, ...databaseVideogames];
};
module.exports = {
  createVideogame,
  getVideogameById,
  getAllVideogames,
  searchByName,
};
