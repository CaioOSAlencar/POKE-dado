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

  /**
   * Armazenar accesstoken e refreshtoken no banco de dados
   */
  async armazenarTokens(id, accesstoken, refreshtoken) {
    const documento = await this.model.findById(id);
    if (!documento) {
      throw new Error('Usuário não encontrado');
    }
    documento.accesstoken = accesstoken;
    documento.refreshtoken = refreshtoken;
    const data = await documento.save();
    return data;
  }

  /**
   * Atualizar usuário removendo accesstoken e refreshtoken
   */
  async removeToken(id) {
    // Criar objeto com os campos a serem atualizados
    const parsedData = {
      accesstoken: null,
      refreshtoken: null
    };
    const usuario = await this.model.findByIdAndUpdate(id, parsedData, { new: true }).exec();

    // Validar se o usuário atualizado foi retornado
    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }
    return usuario;
  }

  async createUser(user) {
    const newUser = new this.model(user);
    return await newUser.save();
  }

  async deleteUser(apelido) {
    const result = await this.model.findOneAndDelete({ apelido });
    if (!result) {
      throw new Error('Usuário não encontrado');
    }
    return result;
  }
}

export default UserRepository;