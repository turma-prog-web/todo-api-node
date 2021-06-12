const TaskRepo = require('./repo');
class TaskService {
  constructor() {
    this.repository = TaskRepo;
  }

  async getAll() {
    try {
      const results = await this.repository.find().populate("users");
      return results;
    } catch (error) {
      console.log(error);
    }
  }

  async getById(_id) {
    try {
      const results = await this.repository.findOne({ _id }).populate("users");
      return results;
    } catch (error) {
      console.log(error);
    }
  }

  async create(data) {
    try {
      const results = await this.repository.create(data);
      return results;
    } catch (error) {
      console.log(error);
    }
  }

  async updateItem(id, dataToUpdate) {
    try {
      await this.repository.findOneAndUpdate({ _id: id }, dataToUpdate);
      return { id };
    } catch (error) {
      console.log(error);
    }
  }

  async removeItem(id) {
    try {
      await this.repository.findOneAndDelete({ _id: id });
      return { id };
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = { TaskService };
