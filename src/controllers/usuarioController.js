import UsuarioService from '../service/usuarioService.js';
import { commonResponse } from '../utils/commonResponse.js';
// import { UsuarioSchema } from '../schemas/usuarioSchema.js';

class UsuarioController {
  constructor() {
    this.service = new UsuarioService();
  }
  async listar(req, res) {
    try {
      const data = await this.service.listar(req);
      console.log('Dados retornados pelo serviço:', data);
      return res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
}

export default UsuarioController;