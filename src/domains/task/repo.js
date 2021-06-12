const { Schema, model } = require('mongoose');

const modelName = 'Task';
const modelObject = {
  title: { type: String, required: true, default: "Nova Tarefa" },
  labels: [
    {
      title: { type: String, required: false},
      color: { type: String, required: false}
    }
  ],
  users: [
    { type: Schema.Types.ObjectId, ref: "User" }
  ]
};
const schemaDocument = new Schema(modelObject, { timestamps: true });

module.exports = model(modelName, schemaDocument);
