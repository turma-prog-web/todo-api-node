const TaskModel = require('../model/task.model');

async function getAll() {
  try {
    const tasks = await TaskModel.find();
    return tasks;
  } catch (error) {
    console.log(error);
  }
}

async function create(data) {
  try {
    const task = await TaskModel.create(data);
    return task;
  } catch (error) {
    console.log(error);
  }
}
module.exports = { getAll, create };
