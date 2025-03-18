import express from "express";
// import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import getSwaggerOptions from "../docs/config/head.js";
// import logRoutes from "../middlewares/LogRoutesMiddleware.js";

import user from './userRotes.js';
import pokemon from './pokemonRouter.js';
import authRoute from './authRoutes.js';

import dotenv from "dotenv";

// carrega as variaveis de ambiente do arquivo .env
dotenv.config();

// função para configirar as rotas do servidor
const routes = (app) => {
  // Configurando a documentação da Swagger UI para ser servida diretamente em '/'
  const swaggerDocs = swaggerJsDoc(getSwaggerOptions());
  app.use(swaggerUI.serve);
  app.get("/", (req, res, next) => {
    swaggerUI.setup(swaggerDocs)(req, res, next);
  });
  app.use(express.json(),
    user,
    pokemon,
    authRoute
  );

  app.use((req, res) => {
    res.status(404).json({ message: "Rote not found" });
  });
};

// exporta a função de configuração de rotas
export default routes;
