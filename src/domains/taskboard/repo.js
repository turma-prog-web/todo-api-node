const { Schema, model } = require('mongoose');

const modelName = 'TaskBoard';
const modelObject = {
  title: { type: String, required: true, default: null },
  users: [{ type: Schema.Types.ObjectId, ref: "User" }],
};
const schemaDocument = new Schema(modelObject, { timestamps: true });

module.exports = model(modelName, schemaDocument);