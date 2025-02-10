import express from "express";
import dotenv from "dotenv";

// importa os roteadores de usuario
import usuarioRouter from './usuarioRotes.js';
import pokemonRouter from './pokemonRouter.js'; 

// carrega as variaveis de ambiente do arquivo .env
dotenv.config();

// função para configirar as rotas do servidor
const routes = (app) => {
  // habilita o uso de JSON nas requisiçoes
  app.use(express.json());

  // define as rotas para usuario e pokemon
  app.use('/usuario', usuarioRouter);  
  app.use('/pokemon', pokemonRouter); 

  // rota padrão para lidar com rotas não encontradas
  app.use((req, res) => {
    res.status(404).json({ message: "Rota não encontrada" });
  });
};

// exporta a função de configuração de rotas
export default routes;
