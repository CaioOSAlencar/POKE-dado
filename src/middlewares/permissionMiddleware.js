import PermissoesRepository from '../repositories/permissoesRepository.js';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

const permissaoMiddleware = async (req, res, next) => {

  try {

    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Token não fornecido' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const _id = decoded.id;

    const repository = new PermissoesRepository()

    const usuario = await repository.listar(_id)
    console.log(usuario)

    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    if (!usuario.ativo) {
      return res.status(404).json({ message: 'Usuário Inativo' });
    }

    const rotaAtual = req.route.path.replace('/','').replace('/:',':'); 
    const metodoAtual = req.method.toLowerCase();

    function busca(grupos){
      let acesso 
        for (let i = 0; i < grupos.length; i++) {
          acesso = grupos[i].permissoes.find(p => {
            const rotaMatch = p.rota == rotaAtual;
            const metodoPermitido = p[`_${metodoAtual}`];
            console.log(rotaMatch, metodoPermitido, p.ativo)
            if(rotaMatch && metodoPermitido && p.ativo){
              return true
            };
          })
          
          if(acesso){
            break
          }
        }    
        return acesso
    }
    const permissao_grupos = busca(usuario)
    const permissao_pessoal = busca(usuario.grupos)

    if (!permissao_pessoal && !permissao_grupos) {
      return res.status(403).json({ message: 'Acesso negado' });
    }

    next();
  } catch (error) {
    console.error('Erro ao verificar permissões:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

export default permissaoMiddleware;
