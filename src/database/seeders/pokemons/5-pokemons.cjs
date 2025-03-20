/**
 * npx seed -u 'url-do-banco' ./src/database/seeders --> Apenas cria os dados
 * npx seed -u 'url-do-banco' --drop-database ./src/database/seeders --> APAGA TODAS AS TABELAS E FODA-SE KAAKKAKAKAAKAKAKAKKAKAAKAKAAKAKAKAKAKKAAKKAKAKAAKAKAKAKKAKAAKAKAAKAKAKAKAKKAAKKAKAKAAKAKAKAKKAKAAKAKAAKAKAKAKAKKAAKKAKAKAAKAKAKAKKAKAAKAKAAKAKAKAKAKKAAKKAKAKAAKAKAKAKKAKAAKAKAAKAKAKAKAKKAAKKAKAKAAKAKAKAKKAKAAKAKAAKAKAKAKAKKAAKKAKAKAAKAKAKAKKAKAAKAKAAKAKAKAKAKKAAKKAKAKAAKAKAKAKKAKAAKAKAAKAKAKAKAKKAAKKAKAKAAKAKAKAKKAKAAKAKAAKAKAKAKAKKAAKKAKAKAAKAKAKAKKAKAAKAKAAKAKAKAKAKKAAKKAKAKAAKAKAKAKKAKAAKAKAAKAKAKAKAKKAAKKAKAKAAKAKAKAKKAKAAKAKAAKAKAKAKAKKAAKKAKAKAAKAKAKAKKAKAAKAKAAKAKAKAKAKKAAKKAKAKAAKAKAKAKKAKAAKAKAAKAKAKAKAK
 */

module.exports = [
{
  nome: 'Rattata',
  tipo_primario: "Normal",
  tipo_secundario: "",
  raridade: "muito comum", 
  shiny: false,
},
{
  nome: 'Pikachu',
  tipo_primario: "Elétrico",
  tipo_secundario: "",
  raridade: "comum", 
  shiny: false,
},
{
  nome: 'Charmander',
  tipo_primario: "Fogo",
  tipo_secundario: "trovão",
  raridade: "incomum", 
  shiny: false,
},
{
  nome: 'Squirtle',
  tipo_primario: "Água",
  tipo_secundario: "Lava",
  raridade: "raro", 
  shiny: false,
},
{
  nome: 'Bulbasaur',
  tipo_primario: "Planta",
  tipo_secundario: "Pedra",
  raridade: "muito raro", 
  shiny: false,
},
{
  nome: 'Caterpie',
  tipo_primario: "Inseto",
  tipo_secundario: "Demoníaco",
  raridade: "místico", 
  shiny: false,
},
];
