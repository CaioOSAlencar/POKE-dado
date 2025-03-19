import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import 'dotenv/config';

dotenv.config();

const AuthMiddleware = (req, res, next) => {
  try {
    const header = req.headers['authorization'];
    if (header) {
      const JWT = process.env.JWT_SECRET;
      const bearer = header.split(' ');
      const token = bearer[1];
      const payload = jwt.verify(token, JWT);
      if (payload) {
        req.user = payload; // Adiciona o payload ao objeto req
        return next();
      }
    }

    return res.status(401).json({ msg: 'Impossível continuar, usuário sem credenciais' });
  } catch (error) {
    console.error('Erro no middleware AuthMiddleware:', error); // Log detalhado no console
    return res.status(500).json({ msg: 'Erro interno do servidor, tente novamente mais tarde!', error: error.message || error });
  }
};

export default AuthMiddleware;
