import bcrypt from 'bcrypt';
import UserRepository from '../repositories/userRepository.js';

class UserService {
  constructor() { 
    this.repository = new UserRepository(); 
  }

  async get_all_users(req, page = 1) {
    const limit = 10;
    const data = await this.repository.get_users(req, page, limit);
    if (!data) {
      return null;
    }
    return data;
  }

  async registerUser(apelido, senha, n_sorte, role = null, mesa_id = null, historico_rolls=null) {
    console.log('Senha recebida:', senha);
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(senha, saltRounds);

    const newUser = {
      apelido,
      senha: hashedPassword,
      role,
      n_sorte,
      mesa_id,
      historico_rolls
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