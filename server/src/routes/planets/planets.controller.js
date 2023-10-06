const planets = require("../../model/planets.model");

function getAllplanets(req, res) {
  return res.status(200).json(planets);
}
module.exports = {
  getAllplanets,
};
