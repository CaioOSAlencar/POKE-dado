const loginRoutes = {
  "/login": {
    post: {
      tags: ["Login"],
      summary: "Realiza o login do usuário e fornece o token de acesso(Acess_token).",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                apelido: {
                  type: "string",
                  description: "Apelido do usuário.",
                  example: "Caio"
                },
                senha: {
                  type: "string",
                  description: "Senha do usuário",
                  example: "Testando-123"
                }
              },
              required: ["apelido", "senha"]
            }
          }
        }
      },
      responses: {
        "200": {
          description: "Requisição bem-sucedida.",
          content: {
            $ref: "#/components/schemas/retornoLogin"
          }
        },
        "500": {
          description: "Servidor encontrou um erro interno.",
          content: {
            $ref: "#/components/schemas/erro500Login"
          }
        },
      }
    },
  }
}

export default loginRoutes;

