import UsuarioModel from '../models/usuarios.model.js';

class UsuarioRepository {
  constructor({
    usuarioModel = UsuarioModel,
  } = {}) {
    this.model = usuarioModel;
  }
  async listar(data) {
    const id = data.params.id || null;

    if (id) {
      const data = await this.model.findById(id);
      if (!data) { throw new Error('Nenhum usuário encontrado'); }

      return data;
    }

    const { page = 1, limite = 10 } = data.query;
    const options = {
      page: parseInt(page, 10),
      limit: parseInt(limite, 10),
    };

    const resultado = await this.model.paginate({}, options);

    return resultado;
  }
}

export default UsuarioRepository;