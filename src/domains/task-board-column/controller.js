const { TaskBoardColumService } = require('./service');
class TaskBoardColumController {
  constructor() {
    this.service = new TaskBoardColumService();
  }

  async addTaskOnColum(req, res) {
    const { taskId, columnId } = req.params;
    const result = await this.service.addTaskOnColum(columnId, taskId);
    return res.status(200).send({ result });
  }

  async removeTaskOnColum(req, res) {
    const { taskId, columnId } = req.params;
    const result = await this.service.removeTaskOnColum(columnId, taskId);
    return res.status(200).send({ result });
  }
  async getAllColums(req, res) {
    try {
      const results = await this.service.getAllColumnsByTaskboardId(
        req.params.id
      );
      return res.status(200).send({ results });
    } catch (error) {
      return res.status(500).send({ error });
    }
  }

  async getAll(req, res) {
    try {
      const results = await this.service.getAll();
      return res.status(200).send({ results });
    } catch (error) {
      return res.status(500).send({ error });
    }
  }

  async getById(req, res) {
    try {
      const results = await this.service.getById(req.params.id);
      return res.status(200).send({ results });
    } catch (error) {
      return res.status(500).send({ error });
    }
  }

  async create(req, res) {
    try {
      const result = await this.service.create(req.body);
      return res.status(200).send({ result });
    } catch (error) {
      return res.status(500).send({ error });
    }
  }

  async updateItem(req, res) {
    try {
      const result = await this.service.updateItem(req.params.id, req.body);
      return res.status(200).send({ result });
    } catch (error) {
      return res.status(500).send({ error });
    }
  }

  async removeItem(req, res) {
    try {
      const result = await this.service.removeItem(req.params.id);
      return res.status(200).send({ result });
    } catch (error) {
      return res.status(500).send({ error });
    }
  }
}

module.exports = { TaskBoardColumController };
