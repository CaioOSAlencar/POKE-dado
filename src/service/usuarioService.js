import UsuarioRepository from '../repositories/usuarioRepository.js';

class GastosService {
  constructor() { this.repository = new UsuarioRepository(); }
  async listar(req) {
    const data = await this.repository.listar(req);
    console.log('Dados retornados pelo repositório:', data);
    
    if (!data.docs.length) {
      throw new Error('Nenhum usuário encontrado');
    }
    return data;
  }
}

export default GastosService;