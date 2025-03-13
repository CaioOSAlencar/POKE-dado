import UserModel from '../models/user.model.js';

class UserRepository {
  constructor({
    userModel = UserModel,
  } = {}) {
    this.model = userModel;
  }

  /**
   * @get_users If ID or apelido is passed, returns a specific user, otherwise returns all users
   */
  async get_users(data, page = 1, limit = 10) {
    const id = data.params.id || null;
    const apelido = data.query.apelido || null;
    const n_sorte = data.query.n_sorte || null;
    console.log('ID:', id);
    console.log('Apelido:', apelido);
    console.log('N_sorte:', n_sorte);
    console.log('Page:', page);
    
    if (!data) { return null; }

    const selectFields = '_id apelido n_sorte role mesa_id historico_rolls';

    if (id) {
      const user = await this.model.findById(id).select(selectFields);
      return user || null;
    }

    if (apelido) {
      const user = await this.model.findOne({ apelido }).select(selectFields);
      return user || null;
    }
    if (n_sorte) {
      const user = await this.model.findOne({ n_sorte }).select(selectFields);
      return user || null;
    }

    const options = {
      page: parseInt(page, 10),
      limit: 10, // Fixed limit
      select: selectFields
    };

    const resultado = await this.model.paginate({}, options);
    return resultado.docs.length ? resultado : null;
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