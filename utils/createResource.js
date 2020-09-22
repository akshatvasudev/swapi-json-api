const createAttributes = require("../utils/createAttributes");
const createRelationships = require("../utils/createRelationships");
const { relationships } = require("../utils/constants");

const createResource = (data, id, type) => {
  const relationshipsMapper = {},
    attributeMapper = {};
  for (let key in data) {
    if (relationships[key] && data[key]) {
      relationshipsMapper[key] = data[key];
    } else {
      attributeMapper[key] = data[key];
    }
  }
  return {
    id,
    type,
    attributes: attributeMapper,
    relationships: createRelationships(relationshipsMapper),
  };
};

module.exports = createResource;
