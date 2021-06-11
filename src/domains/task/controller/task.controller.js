const TaskService = require('../service/task.service');

async function getAll(req, res) {
  try {
    const tasks = await TaskService.getAll();
    return res.status(200).send({ result: tasks });
  } catch (error) {
    return res.status(500).send('Deu Erro!!');
  }
}

async function create(req, res) {
  try {
    const task = await TaskService.create(req.body);
    return res.status(200).send({ task });
  } catch (error) {
    return res.status(500).send('Deu Erro!!');
  }
}

module.exports = { getAll, create };
