const { UserService } = require('./service');
const qs = require('querystring');

class UserController {
  constructor() {
    this.service = new UserService();
  }
  async loginOrCreateAccount(req, res) {
    if (req.query?.error) {
      const error = JSON.parse(req.query.error);
      return res.status(error.statusCode).send(error);
    }

    const userData = JSON.parse(req.query.user);
    const { user, token } = await this.service.findOrCreateUser(userData);
    const payloadToQueryString = {
      user: JSON.stringify(user),
      token,
    };
    const query = qs.stringify(payloadToQueryString);
    const url = `${process.env.FRONT_END}?${query}`;
    return res.redirect(url);
  }

  async getById(req, res) {
    try {
      const results = await this.service.getById(req.params.id);
      return res.status(200).send({ results });
    } catch (error) {
      return res.status(500).send({ error });
    }
  }
}

module.exports = { UserController };
