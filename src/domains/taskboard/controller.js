const { TaskBoardService } = require('./service');
class TaskBoardController {
  constructor() {
    this.service = new TaskBoardService();
  }
  async getAllByCustomerId(req, res) {
    try {
      const results = await this.service.getAllByCustomerId(req.params.userId);
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

module.exports = { TaskBoardController };
