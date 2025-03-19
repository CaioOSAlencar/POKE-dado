/**
 * npx seed -u 'url-do-banco' ./src/database/seeders --> Apenas cria os dados
 * npx seed -u 'url-do-banco' --drop-database ./src/database/seeders --> apaga os dados da tabela e insere novos dados
 */
const { ObjectId } = require('mongodb');

module.exports = [
{
  _id: new ObjectId("64b7f8e2f2a4b5d6c7e8f9a0"), 
  nome:"admin",
},
{
  _id: new ObjectId("64b7f8e2f2a4b5d6c7e8f9a1"), 
  nome:"player",
},
{
  _id: new ObjectId("64b7f8e2f2a4b5d6c7e8f9a2"), 
  nome:"mestre",
},
];
