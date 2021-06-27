const { TaskBoardColumController } = require('./controller');

module.exports = (app) => {
  const controller = new TaskBoardColumController();
  app.get('/task-column/:id', (...params) =>
    controller.getAllColums(...params)
  );
  app.get('/task-column', (...params) => controller.getAll(...params));
  app.post('/task-column', (...params) => controller.create(...params));
  app.put('/task-column/:id', (...params) => controller.updateItem(...params));

  app.put('/task-column/:columnId/add/:taskId', (...params) =>
    controller.addTaskOnColum(...params)
  );
  app.put('/task-column/:columnId/remove/:taskId', (...params) =>
    controller.removeTaskOnColum(...params)
  );
  app.delete('/task-column/:id', (...params) =>
    controller.removeItem(...params)
  );
};
