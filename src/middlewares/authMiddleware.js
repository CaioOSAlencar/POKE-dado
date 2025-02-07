import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import AuthService from '../services/AuthService.js';

class AuthMiddleware {
  constructor() {
    this.service = new AuthService();
    this.handle = this.handle.bind(this);
  }

  async handle(req, res, next) {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        throw new Error("O token de autenticação não existe!");
      }

      const [scheme, token] = authHeader.split(' ');

      if (scheme !== 'Bearer' || !token) {
        throw new Error("Formato do token de autenticação inválido!");
      }

      const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

      if (!decoded) {
        throw new Error("O token JWT está expirado!");
      }

      const tokenData = await this.service.carregatokens(decoded.id);

      if (!tokenData?.data?.refreshtoken) {
        throw new Error('Refresh token inválido, autentique novamente!');
      }

      req.user_id = decoded.id;
      next();

    } catch (err) {
      if (err.name === 'JsonWebTokenError') {
        next(new Error("Token JWT inválido!"));
      } else if (err.name === 'TokenExpiredError') {
        next(new Error("O token JWT está expirado!"));
      } else {
        next(err);
      }
    }
  }
}

export default new AuthMiddleware().handle;
