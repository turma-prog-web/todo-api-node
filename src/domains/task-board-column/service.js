const TaskBoardColumRepo = require('./repo');
class TaskBoardColumService {
  constructor() {
    this.repository = TaskBoardColumRepo;
  }

  async getAll() {
    try {
      const results = await this.repository.find();
      return results;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllColumnsByTaskboardId(taskboard_id) {
    try {
      const results = await this.repository
        .find({ taskboard: taskboard_id })
        .populate({
          path: 'tasks',
          populate: { path: 'users', model: 'User' },
        });
      return results;
    } catch (error) {
      console.log(error);
    }
  }

  async addTaskOnColum(column_id, task_id) {
    try {
      const result = await this.repository.findOneAndUpdate(
        { _id: column_id },
        { $push: { tasks: task_id } },
        { new: true }
      );

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async removeTaskOnColum(column_id, task_id) {
    try {
      const result = await this.repository.findOneAndUpdate(
        { _id: column_id },
        { $pull: { tasks: task_id } },
        { new: true }
      );

      return result;
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
      await this.repository.findOneAndUpdate({ _id: id }, dataToUpdate, {
        new: true,
      });
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

module.exports = { TaskBoardColumService };
