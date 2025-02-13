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
      const { nome, email, senha, mestre, N_SORTE } = req.body;
      const data = await this.service.registerUser(nome, email, senha, mestre, N_SORTE);
      return res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }

  async authenticateUser(req, res) {
    try {
      const { nome, senha } = req.body;
      const data = await this.service.authenticateUser(nome, senha);
      return res.status(200).json(data);
    } catch (error) {
      res.status(401).json({ msg: error.message });
    }
  }
}

export default UserController;