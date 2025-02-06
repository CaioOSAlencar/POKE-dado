import UserModel from '../models/user.model.js';

class UserRepository {
  constructor({
    userModel = UserModel,
  } = {}) {
    this.model = userModel;
  }

  /**
   * @get_users If ID is passed, returns a specific user, otherwise returns all users
   */
  async get_users(data) {
    const id = data.params.id || null;

    if (id) {
      const data = await this.model.findById(id);
      if (!data) { throw new Error('No users found'); }

      return data;
    }

    const { page = 1, limit = 10 } = data.query;
    const options = {
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
    };

    const resultado = await this.model.paginate({}, options);

    return resultado;
  }
}

export default UserRepository;