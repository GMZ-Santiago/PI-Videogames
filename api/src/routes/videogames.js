const { Router } = require("express");

const {
  getVideogamesHandler,
  getVideogameId,
  postVideogame,
} = require("../handlers/videogameHandler");

const videogamesRouter = Router();

videogamesRouter.get("/", getVideogamesHandler);
videogamesRouter.post("/", postVideogame);
videogamesRouter.get("/:id", getVideogameId);

module.exports = videogamesRouter;
