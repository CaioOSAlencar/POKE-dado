import UserService from '../service/UserService.js';
import { commonResponse } from '../utils/commonResponse.js';
// import { UserSchema } from '../schemas/userSchema.js';

class UserController {
  constructor() {
    this.service = new UserService();
  }
  async get_all_users(req, res) {
    try {
      const data = await this.service.get_all_users(req);

      return res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }

  async registerUser(req, res) {
    try {
      const { apelido, senha, n_sorte, role, mesa_id } = req.body;
      console.log('Senha recebida:', senha);
      if (!apelido || !senha || !n_sorte) {
        return res.status(400).json({ msg: 'Campos obrigatórios faltando' });
      }
      if (senha.length < 8) {
        return res.status(400).json({ msg: 'A senha deve ter pelo menos 8 caracteres' });
      }

      const data = await this.service.registerUser(apelido, senha, n_sorte, role, mesa_id);
      return res.status(201).json(data);
    } catch (error) {
      if (error.code === 11000) {
        // Código de erro para chave duplicada no MongoDB
        return res.status(400).json({ msg: 'Já existe um usuário com este apelido.' });
      }
      res.status(500).json({ msg: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const { apelido } = req.query;
      if (!apelido) {
        return res.status(400).send({ message: 'Apelido é obrigatório' });
      }
      await this.service.deleteUser(apelido);
      res.status(200).send({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

export default UserController;