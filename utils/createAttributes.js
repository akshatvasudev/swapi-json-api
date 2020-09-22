const createAttributes = (attributes) => {
  let data = {};

  for (const key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      data[key] = attributes[key];
    }
  }

  return data;
};

module.exports = createAttributes;
