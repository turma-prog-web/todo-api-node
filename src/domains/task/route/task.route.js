const TaskController = require('../controller/task.controller');
module.exports = (app) => {
  app.route('/task').get(TaskController.getAll).post(TaskController.create);
};
