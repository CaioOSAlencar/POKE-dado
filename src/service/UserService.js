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

  async registerUser(apelido, senha, n_sorte, role = null, mesa_id = null) {
    console.log('Senha recebida:', senha);
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(senha, saltRounds);

    const newUser = {
      apelido,
      senha: hashedPassword,
      role,
      n_sorte,
      mesa_id
    };

    return await this.repository.createUser(newUser);
  }

  async deleteUser(apelido) {
    return await this.repository.deleteUser(apelido);
  }
}

export default UserService;