import UserRepository from '../repositories/userRepository.js';

class UserService {
  constructor() { 
    this.repository = new UserRepository(); 
  }
  async get_all_users(req) {
    const data = await this.repository.listar(req);
    
    if (!data.docs.length) {
      throw new Error('No users found');
    }
    return data;
  }
}

export default UserService;