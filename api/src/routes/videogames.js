const { Router } = require("express");
const videogamesRoutes = Router();
const {
  getVideogamesHandler,
  getVideogameId,
  postVideogame,
} = require("../handlers/videogameHandler");

videogamesRoutes.get("/", getVideogamesHandler)
videogamesRoutes.post("/", postVideogame)
videogamesRoutes.get("/:id", getVideogameId);

module.exports = videogamesRoutes;
