/**
 * npx seed -u 'url-do-banco' ./src/database/seeders --> Apenas cria os dados
 * npx seed -u 'url-do-banco' --drop-database/seeders ./src/database/seeders --> apaga os dados da tabela e insere novos dados
 */
const { ObjectId } = require('mongodb');

module.exports = [
  {
    _id: new ObjectId("64b7f8e2f2a4b5d6c7e8f9a8"),
    rota:["/user","/user/register","/user/delete","/user/update/:id"],
  },
  {
    _id: new ObjectId("64b7f8e2f2a4b5d6c7e8f9a9"),
    rota:["/pokemon/random"],
  },
  ];
