import bcrypt from 'bcrypt';
import UserRepository from '../repositories/userRepository.js';
import mongoose from 'mongoose';
import RoleModel from '../models/role.model.js';

class UserService {
  constructor() {
    this.repository = new UserRepository();
    this.roleModel = new RoleModel();
  }

  async get_all_users(req, page = 1) {
    const limit = 10;
    const data = await this.repository.get_users(req, page, limit);
    if (!data) {
      return null;
    }
    return data;
  }

  async registerUser(apelido, senha, n_sorte, role_id = null, mesa_id = null, historico_rolls = null) {
    console.log('Senha recebida:', senha);

    // Verificar se o apelido já existe
    const existingUser = await this.repository.findUserByApelido(apelido);
    if (existingUser) {
      throw new Error('Já existe um usuário com este apelido.');
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(senha, saltRounds);

    // Mapear role para ObjectId fixo
    const roleMapping = {
      admin: new mongoose.Types.ObjectId('64b7f8e2f2a4b5d6c7e8f9a0'),
      player: new mongoose.Types.ObjectId('64b7f8e2f2a4b5d6c7e8f9a1'),
      mestre: new mongoose.Types.ObjectId('64b7f8e2f2a4b5d6c7e8f9a2'),
    };
    const roleId = roleMapping[role_id] || null;

    const newUser = {
      apelido,
      senha: hashedPassword,
      role_id: roleId,
      n_sorte,
      mesa_id,
      historico_rolls,
    };

    return await this.repository.createUser(newUser);
  }

  async deleteUser(apelido) {
    return await this.repository.deleteUser(apelido);
  }

  async updateUser(id, apelido, n_sorte) {
    return await this.repository.updateUser(id, apelido, n_sorte);
  }
}

export default UserService;