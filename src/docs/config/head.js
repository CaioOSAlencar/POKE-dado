//routes
import authPaths from "../routes/auth.js";
import userPaths from "../routes/user.js";
//schemas
import authSchema from "../schemas/loginSchemaDocs.js";
import userSchema from "../schemas/userSchemaDocs.js";

// Função para definir as URLs do servidor dependendo do ambiente
const getServersInCorrectOrder = () => {
  const devUrl = { url: process.env.SWAGGER_DEV_URL || "http://localhost:3072" };
  const prodUrl = { url: process.env.SWAGGER_PROD_URL || "http://localhost:3072" };

  if (process.env.NODE_ENV === "production") return [prodUrl];
  else return [devUrl];
};

// Função para obter as opções do Swagger
const getSwaggerOptions = () => {
  return {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "Poke dados API",
        version: "1.0-alpha",
        description: "Poke dados API\n\nÉ necessário autenticar com o acess_token antes de utilizar as rotas, a rota /login deverá ser feita utilizando um apelido e senha válidos.",
      },
      servers: getServersInCorrectOrder(),
      tags: [
        {
          name: "Login",
          description: "Rota para autenticação"
        },
        {
          name: "Usuários",
          description: "Rota para gestão de usuários"
        },
        {
          name: "Pokemons",
          description: "Rota para gestão de pokemons"
        },
      ],
      paths: {
        ...authPaths,
        ...userPaths,
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT"
          }
        },
        schemas: {
          ...authSchema,
          ...userSchema,
        }
      },
      security: [{
        bearerAuth: []
      }]
    },
    apis: ["./src/routes/*.js"]
  };
};

export default getSwaggerOptions;