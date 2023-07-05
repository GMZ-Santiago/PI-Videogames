const { Router } = require("express");
const { getAllGenres } = require("../handlers/genresHandler");
const genresRoutes = Router();

genresRoutes.get("/", getAllGenres);

module.exports = genresRoutes;
