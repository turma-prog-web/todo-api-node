const { UserController } = require('./controller');

module.exports = (app) => {
  const controller = new UserController();
  app.get('/user', (...params) => controller.getAll(...params));
  app.post('/user', (...params) => controller.create(...params));
  app.get('/user/:id', (...params) => controller.getById(...params));
  app.put('/user/:id', (...params) => controller.updateItem(...params));
  app.delete('/user/:id', (...params) => controller.removeItem(...params));
};
