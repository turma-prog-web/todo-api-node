const { Schema, model } = require('mongoose');

const modelName = 'TaskBoardColum';
const modelObject = {
  taskboard: { type: Schema.Types.ObjectId, ref: 'TaskBoard' },
  title: { type: String, required: true, default: null },
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
};
const schemaDocument = new Schema(modelObject, { timestamps: true });

module.exports = model(modelName, schemaDocument);
