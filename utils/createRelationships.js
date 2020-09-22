const createRelationships = (relationships) => {
  let data = {};

  for (let key in relationships) {
    console.log(relationships);
    data[key] = {
      links: {},//TODO
      data: relationships[key].map((reln) => {
        return {
          type: key,
          id: reln.split("/").reverse()[1],
        };
      }),
    };
  }

  return data;
};

module.exports = createRelationships;
