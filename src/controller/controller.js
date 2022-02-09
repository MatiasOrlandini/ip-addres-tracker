//GET RUTA(/)
const axios = require("axios");

exports.controllerHome = (req, res) => {
  res.render("home");
};
//POST  RUTA(/)
var cords;
exports.getPosition = async (req, res) => {
  const api_key = process.env.api_key;
  const api_url = "https://geo.ipify.org/api/v1?";
  let ip = req.body.ip;

  let url = `${api_url}apiKey=${api_key}&ipAddress=${ip}`;

  try {
    const resp = await axios.get(url);
    const info = resp.data;
    let obj = {
      lat: info.location.lat,
      lng: info.location.lng,
      region: info.location.region,
      city: info.location.city,
      key: process.env.api_key_map,
    };

    return res.status(200).json(obj);
  } catch (error) {
    return res.status(400);
  }
};
