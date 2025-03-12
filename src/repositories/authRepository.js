import UsuarioModel from '../models/user.model.js';
import { CustomError, messages } from '../utils/commonResponse.js';

class LoginRepository {
  constructor({
    usuarioModel = UsuarioModel,
  } = {}) {
    this.model = usuarioModel;
  }

  /**
   * Buscar usuário por email e, opcionalmente, por um ID diferente.
   */
  async buscarApelido(apelido, idIgnorado = null) {
    try {
      // Criar o filtro base
      const filtro = { apelido };

      // Adicionar a condição para excluir o ID, se fornecido
      if (idIgnorado) {
        filtro._id = { $ne: idIgnorado }; // Adiciona a condição _id != idIgnorado
      }

      // Consultar o documento no banco de dados e incluir o campo 'senha'
      const documento = await this.model.findOne(filtro)
        .select('+senha'); // Incluir o campo 'senha'

      if (!documento) {
        throw new CustomError({
          statusCode: 404,
          errorType: 'resourceNotFound',
          field: 'Usuário',
          details: [],
          customMessage: messages.error.resourceNotFound('Usuário')
        });
      }
      return documento;
    } catch (error) {
      throw new CustomError({
        statusCode: 500,
        errorType: 'internalServerError',
        field: 'Database',
        details: [error.message],
        customMessage: 'Erro ao buscar usuário no banco de dados'
      });
    }
  }

  /**
   * Método buscar por ID - Deve ser chamado por controllers ou services.
   * para retornar um usuário e ser utilizado em outras funções de validação
   * cujo listar não atende por exigir req.
   */
  async buscarPorId(id) {
    try {
      const user = await this.model.findById(id);
      if (!user) {
        throw new CustomError({
          statusCode: 404,
          errorType: 'resourceNotFound',
          field: 'Usuário',
          details: [],
          customMessage: messages.error.resourceNotFound('Usuário')
        });
      }
      return user;
    } catch (error) {
      throw new CustomError({
        statusCode: 500,
        errorType: 'internalServerError',
        field: 'Database',
        details: [error.message],
        customMessage: 'Erro ao buscar usuário por ID no banco de dados'
      });
    }
  }
  async atualizar(id, dadosAtualizados) {
    try {
      const usuarioAtualizado = await this.model.findByIdAndUpdate(id, dadosAtualizados, { new: true }).exec();
      if (!usuarioAtualizado) {
        throw new CustomError({
          statusCode: 404,
          errorType: 'resourceNotFound',
          field: 'Usuário',
          details: [],
          customMessage: messages.error.resourceNotFound('Usuário')
        });
      }
      return usuarioAtualizado;
    } catch (error) {
      throw new CustomError({
        statusCode: 500,
        errorType: 'internalServerError',
        field: 'Database',
        details: [error.message],
        customMessage: 'Erro ao atualizar usuário no banco de dados'
      });
    }
  }
}

export default LoginRepository;
