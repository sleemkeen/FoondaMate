const axios = require("axios");
const { BASE_URL } = require("../util/string");

exports.fetchGraph = async () => {
  try {
    let response = await axios.get(BASE_URL);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
