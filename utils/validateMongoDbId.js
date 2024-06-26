const { isValidObjectId } = require("mongoose");
const validateMongodbId = (id, model) => {
  model = model !== undefined ? model : "";
  const isValid = isValidObjectId(id);
  if (!isValid) throw new Error(`This ${model} Id is not valid or not found`);
};

module.exports = validateMongodbId;
