import bcrypt from 'bcrypt';
import UserRepository from '../repositories/userRepository.js';

class UserService {
  constructor() { 
    this.repository = new UserRepository(); 
  }

  async get_all_users(req) {
    const data = await this.repository.get_users(req);
    
    if (!data.docs.length) {
      throw new Error('No users found');
    }
    return data;
  }

  async registerUser(nome, senha, mestre, N_SORTE) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(senha, saltRounds);

    const newUser = {
      nome,
      senha: hashedPassword,
      mestre,
      N_SORTE
    };

    return await this.repository.createUser(newUser);
  }

  async authenticateUser(nome, senha) {
    const user = await this.repository.findUserByName(nome);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const isPasswordValid = await bcrypt.compare(senha, user.senha);
    if (!isPasswordValid) {
      throw new Error('Senha não autorizada');
    }

    // ...gerar e retornar JWT...
  }
}

export default UserService;