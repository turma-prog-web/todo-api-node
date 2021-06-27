const { Schema, model } = require('mongoose');

const modelName = 'User';
const modelObject = {
  name: { type: String, required: true, default: null },
  email: { type: String, required: true, default: null, unique: true },
  picture: { type: String, required: true, default: null },
  code: { type: String, required: true, default: null },
  active: { type: Boolean, required: true, default: true },
};
const schemaDocument = new Schema(modelObject, { timestamps: true });

module.exports = model(modelName, schemaDocument);
