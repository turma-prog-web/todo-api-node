const UserRoute = require('./user/router');

module.exports = (app) => {
  UserRoute(app);
};