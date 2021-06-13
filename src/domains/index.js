const UserRoute = require('./user/router');
const TaskRoute = require('./task/router');
const TaskBoardRoute = require('./taskboard/router')

module.exports = (app) => {
  UserRoute(app);
  TaskRoute(app);
  TaskBoardRoute(app);
};