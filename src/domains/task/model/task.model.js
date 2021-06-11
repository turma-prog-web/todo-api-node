const { Schema, model } = require('mongoose');

const taskSchema = new Schema(
  {
    title: { type: String, required: true, defatult: null },
  },
  { timestamps: true }
);

module.exports = model('Task', taskSchema);
