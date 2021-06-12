const { TaskController } = require('./controller');

module.exports = (app) => {
  const controller = new TaskController();
  app.get('/Task', (...params) => controller.getAll(...params));
  app.post('/Task', (...params) => controller.create(...params));
  app.get('/Task/:id', (...params) => controller.getById(...params));
  app.put('/Task/:id', (...params) => controller.updateItem(...params));
  app.delete('/Task/:id', (...params) => controller.removeItem(...params));
};
