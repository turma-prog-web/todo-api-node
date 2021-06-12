const UserRoute = require('./user/router');
const TaskRoute = require('./task/router');

module.exports = (app) => {
  UserRoute(app);
  TaskRoute(app);
};