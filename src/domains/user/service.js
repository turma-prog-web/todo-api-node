const UserRepo = require('./repo');
const jwt = require('jsonwebtoken');
class UserService {
  constructor() {
    this.repository = UserRepo;
  }

  async findOrCreateUser(userData) {
    try {
      const { email, ...payload } = userData;
      const query = { email };
      const options = { new: true, upsert: true };
      const user = await this.repository.findOneAndUpdate(
        query,
        payload,
        options
      );
      const { code } = user;
      const token = jwt.sign({ code, email }, process.env.SECRET_KEY);
      return { user, token };
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      const results = await this.repository.find();
      return results;
    } catch (error) {
      console.log(error);
    }
  }

  async getById(_id) {
    try {
      const results = await this.repository.findOne({ _id });
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
}

module.exports = { UserService };
