const { Videogame, Genres } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");
const { API_KEY, URL } = process.env;

let cleanArray = (arr) =>
  arr.results.map((element) => {
    return {
      id: element.id,
      name: element.name,
      description: element.description,
      // platforms: element.platforms,
      releaseData: element.releaseData,
      created: false,
      rating: element.rating,
      background_image: element.background_image,
      genres: element.genres,
    };
  });

  const createVideogame = async (name, description, released, rating, platform, genres, background_image) => {
    try {
  
        const generosEncontrados = await Genres.findAll({
            where: { name: genres }
        });
  
        const newVideogame = await Videogame.create({
            name: name,
            description: description,
            released: released,
            rating: rating,
            platform: platform,
            background_image: background_image
        });
  
        await newVideogame.addGenres(generosEncontrados);
        return newVideogame
  
    } catch (error) {
        console.log(error.message)
        console.log(name, description, released, rating, platform, genres, background_image)
    }
  }
  
const getVideogameById = async (id, source) => {
  const videogames =
    source === "api"
      ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=dbff6f3d29ba424984abc923dd1365ef`)).data
      : await Videogame.findByPk(id);

  return videogames;
};

const getAllVideogames = async () => {
  const databaseVideogames = await Videogame.findAll();

  const apiVideogamesRaw = (
    await axios.get(`https://api.rawg.io/api/games?key=dbff6f3d29ba424984abc923dd1365ef`)
  ).data;

  const apiVideogames = apiVideogamesRaw.results.map(element => {
    return {
      id: element.id,
      name: element.name,
      description: element.description,
      // platforms: element.platforms,
      releaseData: element.releaseData,
      created: false,
      rating: element.rating,
      background_image: element.background_image,
      genres: element.genres,
    };
  });

  return [...databaseVideogames, ...apiVideogames];
};

const searchByName = async (name) => {
  const databaseVideogames = await Videogame.findAll({ where: { name: name } });

  const apiVideogamesRaw = (
    await axios.get(`https://api.rawg.io/api/games?search=${name}&key=dbff6f3d29ba424984abc923dd1365ef`)
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





// {
//   "name": "GTA SA",
//   "description": "contenido violeto",
//   "background_image": "url",
//   "releaseDate": "01/01/1212",
//   "rating": "10 puntos",
// "platforms": ["hola"]
// }

