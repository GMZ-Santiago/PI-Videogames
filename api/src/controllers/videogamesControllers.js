const { Videogame, Genres } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");
const db = require("../db");
const { KEY, URL } = process.env;

const infoApi = async () => {
  let url = `https://api.rawg.io/api/genres?key=${KEY}`;
  let gamesUrls = [];
  let count = 1;

  try {
    while (count < 6) {
      gamesUrls.push(axios.get(`${url}&page=${count}`));
      count++;
    }

    const requiredGames = await Promise.all(gamesUrls).then((res) => {
      const games = res.flatMap((res) => res.data.results);
      return games.flatMap((game) => ({
        id: game.id,
        name: game.name,
        image: game.image,
        rating: game.rating,
        genres: game.genres.map((genre) => ({
          id: genre.id,
          name: genre.name,
        })),
      }));
    });

    return requiredGames;
  } catch (error) {
    console.log(error);
  }
};

const dbInfo = async (next) => {
  try {
    return await Videogame.findAll({
      include: [
        {
          model: Genres,
          attributes: ["name", "id"],
        },
      ],
    });
  } catch (error) {
    next(error);
  }
};

const totalInfo = async () => {
  const apiData = await infoApi();
  const dbData = await dbInfo();

  const infoCompleta = dbData.concat(apiData);
  return infoCompleta;
};

const apiName = async (name) => {
  const searchInfo = await axios.get(
    `https://api.rawg.io/api/games?search=${name}&key=${KEY}`
  );
  console.log(searchInfo.data);

  try {
    const searchGame = await searchInfo.data.results.map((el) => {
      return {
        id: el.id,
        name: el.name,
        image: el.image,
        rating: el.rating,
        platforms: el.platforms?.map((el) => el.platforms.name),
        genres: el.genres?.map((el) => el.name),
      };
    });
    return searchGame;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const apiId = async (id) => {
  try {
    const responseApi = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${KEY}`
    );
    if (responseApi.status === 200) {
      const gameId = await responseApi.data;
      const infoApi = {
        id: gameId.id,
        name: gameId.name,
        image: gameId.image,
        genres: gameId.genres?.map((g) => g.name),
        realseData: gameId.realseData,
        rating: gameId.rating,
        platforms: gameId.platforms?.map((el) => el.platforms.name),
      };
      const dbInfo = await idDb(id);

      if (dbInfo) {
        const info = {
          ...infoApi,
          platforms: [
            ...Genres(infoApi.platforms || []),
            ...(dbInfo.platforms || []),
          ],
          genres: [
            ...Genres(infoApi.genres || []),
            ...(dbInfo.genres?.map((g) => g.name) || []),
          ],
        };
        return info;
      } else {
        return infoApi;
      }
    } else {
      return `"El videojuego ${id} no existe`;
    }
  } catch (error) {
    console.log(error);
  }
};

const idDb = async (id) => {
  try {
    return await Videogame.findByPk(id, {
      include: [
        {
          model: Genres,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });
  } catch (error) {
    console.log(Error);
  }
};

const nameDb = async (req, res) => {
  let videogames = [];
  try {
    videogames = await Videogame.findAll({
      include: [{ model: Genres, attributes: ["name"] }],
    });
    if (!videogames)
      return res.status(400).json({ error: "error loading videogames" });
    res.status(200).json(videogames);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const videogame = async (id) => {
  const dbId = id.includes("-");
  if (dbId) {
    const gameDb = await idDb(id);
    return gameDb;
  } else {
    const gameApi = await apiId(id);
    return gameApi;
  }
};

module.exports = {
  infoApi,
  dbInfo,
  totalInfo,
  apiName,
  videogame,
  nameDb,
};
