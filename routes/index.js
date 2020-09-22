const express = require("express");
const router = express.Router();
const axios = require("axios");
const { SWAPI_URL } = require("../utils/constants");
const url = require("url");
const createData = require("../utils/createData");

router.get("/*/:id?", async (req, res, next) => {
  res.setHeader("content-type", "application/vnd.api+json");
  const splitUrl = url.parse(req.url).pathname.split("/");
  const resource = splitUrl[1];
  const id = splitUrl[2];
  try {
    const schema = await axios.get(`${SWAPI_URL}/${resource}/schema`);
    const resourceData = await axios.get(`${SWAPI_URL}${req.url}`);
    const finalResponse = {
      jsonapi: schema.data,
      data: createData(resourceData.data, id, resource),
    };

    res.json(finalResponse);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
