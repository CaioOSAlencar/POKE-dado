const bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');
require('dotenv').config();

/**
 * npx seed -u 'url-do-banco' ./src/database/seeders --> Apenas cria os dados
 * npx seed -u 'url-do-banco' --drop-database/seeders ./src/database/seeders --> apaga os dados da tabela e insere novos dados
 */

module.exports = [
  {
    apelido: 'Thalysson',
    senha: bcrypt.hashSync('Testando-123', 10),
    n_sorte: 50,
    role_id: new ObjectId("64b7f8e2f2a4b5d6c7e8f9a0"),
    mesa_id: null,
    historico_rolls: [50, 50, 50, 50, 50],
  },
  {
    apelido: 'Caio',
    senha: bcrypt.hashSync('Testando-123', 10),
    n_sorte: 50,
    role_id: new ObjectId("64b7f8e2f2a4b5d6c7e8f9a0"),
    mesa_id: null,
    historico_rolls: [50, 50, 50, 50, 50],
  },
  {
    apelido: 'Rigby',
    senha: bcrypt.hashSync('12345678', 10),
    n_sorte: 50,
    role_id: new ObjectId("64b7f8e2f2a4b5d6c7e8f9a0"),
    mesa_id: null,
    historico_rolls: [50, 50, 50, 50, 50],
  },
  {
    apelido: 'Mordecai',
    senha: bcrypt.hashSync('12345678', 10),
    n_sorte: 50,
    role_id: new ObjectId("64b7f8e2f2a4b5d6c7e8f9a0"),
    mesa_id: null,
    historico_rolls: [50, 50, 50, 50, 50],
  },
  {
    apelido: 'Benson',
    senha: bcrypt.hashSync('12345678', 10),
    n_sorte: 50,
    role_id: new ObjectId("64b7f8e2f2a4b5d6c7e8f9a2"),
    mesa_id: null,
    historico_rolls: [50, 5, 10, 11, 57],
  },
  {
    apelido: 'Pops',
    senha: bcrypt.hashSync('12345678', 10),
    n_sorte: 50,
    role_id: new ObjectId("64b7f8e2f2a4b5d6c7e8f9a2"),
    mesa_id: null,
    historico_rolls: [50, 50, 50, 50, 50],
  },
  {
    apelido: 'Skips',
    senha: bcrypt.hashSync('12345678', 10),
    n_sorte: 50,
    role_id: new ObjectId("64b7f8e2f2a4b5d6c7e8f9a1"),
    mesa_id: null,
    historico_rolls: [50, 50, 50, 50, 50],
  },
];
