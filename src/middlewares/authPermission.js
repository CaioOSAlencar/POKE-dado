import jwt from 'jsonwebtoken';
// import PermissionService from '../services/PermissionService.js';

// Certifique-se de que as variáveis de ambiente estejam carregadas
const JWT_SECRET = process.env.JWT_SECRET;

class AuthPermission {
  constructor() {
    this.jwt = jwt;
    // this.permissionService = new PermissionService();
    // this.Rota = Rota;
    this.JWT_SECRET = JWT_SECRET;
    
    this.handle = this.handle.bind(this);
  }

  async handle(req, res, next) {
    try {
      // 1. Extrai o token do cabeçalho Authorization
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new Error("Token de autenticação não encontrado!");
      }

      const token = authHeader.split(' ')[1];

      // 2. Verifica e decodifica o token
      let decoded;
      try {
        decoded = this.jwt.verify(token, this.JWT_SECRET);
      } catch (err) {
        throw new Error("Token JWT inválido!");
      }
      const userId = decoded.id;

      /**
       * 3. Determina a rota e o domínio da requisição
       * Remove barras iniciais e finais, remove query strings e pega a primeira parte da URL
       */
      const rotaReq = req.url.split('/').filter(Boolean)[0].split('?')[0];

      const dominioReq = `localhost`; // domínio foi colocado como localhost para fins de teste

      // 4. Busca a rota atual no banco de dados
      const rotaDB = await this.Rota.findOne({ rota: rotaReq, dominio: dominioReq });
      if (!rotaDB) {
        throw new Error("Rota não encontrada!");
      }

      // 5. Mapeia o método HTTP para o campo de permissão correspondente
      const metodoMap = {
        'GET': 'buscar',
        'POST': 'enviar',
        'PUT': 'substituir',
        'PATCH': 'modificar',
        'DELETE': 'excluir'
      };

      const metodo = metodoMap[req.method];
      if (!metodo) {
        throw new Error("Método não permitido!");
      }

      // 6. Verifica se a rota está ativa e suporta o método
      if (!rotaDB.ativo || !rotaDB[metodo]) {
        throw new Error("Rota não ativa ou método não suportado!");
      }

      // 7. Verifica se o usuário tem permissão
      const hasPermission = await this.permissionService.hasPermission(
        userId,
        rotaReq.toLowerCase(),
        rotaDB.dominio,
        metodo
      );

      if (!hasPermission) {
        throw new Error("Permissão negada!");
      }

      // 8. Anexa o usuário ao objeto de requisição para uso posterior
      req.user = { id: userId };

      // 9. Permite a continuação da requisição
      next();
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthPermission().handle;
