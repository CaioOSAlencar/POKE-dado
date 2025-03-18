import mongoose from 'mongoose';
import Role from '../models/role.model.js'; // Modelo para a tabela 'role'
import Rota from '../models/rota.model.js'; // Modelo para a tabela 'rotas'
import Permissao from '../models/permissoes.model.js'; // Modelo para a tabela 'permissoes'

const authPermission = async (req, res, next) => {
  try {
    const { role_id } = req.user; // Supondo que o AuthMiddleware adiciona o usuário ao req
    const currentRoute = req.baseUrl + req.route.path; // Rota atual
    const currentMethod = req.method; // Método HTTP atual

    console.log('Role ID do usuário:', role_id);
    console.log('Rota atual:', currentRoute);
    console.log('Método atual:', currentMethod);

    // Buscar a rota no banco
    const rota = await Rota.findOne({ rota: currentRoute });
    if (!rota) {
      console.error('Rota não encontrada:', currentRoute);
      return res.status(403).json({ msg: 'Rota não encontrada nas permissões.' });
    }
    console.log('Rota encontrada:', rota);

    // Verificar permissões para o role_id e rota
    const permissao = await Permissao.findOne({
      role_id: new mongoose.Types.ObjectId(role_id), // Certifique-se de que o role_id é um ObjectId
      rota_id: rota._id,
      metodos: currentMethod,
    });

    if (!permissao) {
      console.error('Permissão não encontrada para role_id:', role_id, 'rota_id:', rota._id, 'método:', currentMethod);
      return res.status(403).json({ msg: 'Acesso negado. Permissão insuficiente.' });
    }

    console.log('Permissão encontrada:', permissao);
    next(); // Permissão concedida
  } catch (error) {
    console.error('Erro no middleware authPermission:', error); // Log detalhado no console
    return res.status(500).json({ msg: 'Erro interno do servidor.', error: error.message || error });
  }
};

export default authPermission;
