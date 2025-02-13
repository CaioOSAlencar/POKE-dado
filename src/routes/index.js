import express from "express";
// import swaggerJsDoc from "swagger-jsdoc";
// import swaggerUI from "swagger-ui-express";
// import getSwaggerOptions from "../docs/config/head.js";
// import logRoutes from "../middlewares/LogRoutesMiddleware.js";

import user from './userRotes.js';
import pokemon from './pokemonRouter.js';

import dotenv from "dotenv";

// carrega as variaveis de ambiente do arquivo .env
dotenv.config();

// função para configirar as rotas do servidor
const routes = (app) => {
  app.use(express.json(),
  user,
  pokemon
  );

  app.use((req, res) => {
    res.status(404).json({ message: "Rote not found" });
  });
};

// exporta a função de configuração de rotas
export default routes;
