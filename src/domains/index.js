const UserRoute = require('./user/router');
const TaskBoardRoute = require('./taskboard/router')

module.exports = (app) => {
  UserRoute(app);
  TaskBoardRoute(app);
};