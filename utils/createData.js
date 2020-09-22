const createResource = require("../utils/createResource");

const createData = (response, id, resource) => {
  let data = response.results ? [] : createResource(response, id, resource);

  if (response.results) {
    data = response.results.map((resp) => {
      return createResource(resp, undefined, resource);
    });
  }

  return data;
};

module.exports = createData;
