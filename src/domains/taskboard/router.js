const { TaskBoardController } = require('./controller');

module.exports = (app) => {
  const controller = new TaskBoardController();
  app.get('/task-board', (...params) => controller.getAll(...params));
  app.post('/task-board', (...params) => controller.create(...params));
  app.get('/task-board/:id', (...params) => controller.getById(...params));
  app.put('/task-board/:id', (...params) => controller.updateItem(...params));
  app.delete('/task-board/:id', (...params) => controller.removeItem(...params));
};