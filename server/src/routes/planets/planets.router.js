const express = require("express");
const planetcontroller = require("./planets.controller");
const planetrouter = express.Router();

planetrouter.get("/planets", planetcontroller.getAllplanets);

module.exports = planetrouter;
