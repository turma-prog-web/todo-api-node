const { UserController } = require('./controller');

module.exports = (app) => {
  const controller = new UserController();
  app.get('/login-or-create-account', (...params) =>
    controller.loginOrCreateAccount(...params)
  );
  app.get('/user/:id', (...params) => controller.getById(...params));
};
