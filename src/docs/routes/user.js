const usuarioRoutes = {
  "/users": {
    get: {
      tags: ["Usuários"],
      summary: "Lista todos os usuários",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          _id: "_id",
          in: "query",
          description: "Identificador do usuário.",
          schema: {
            type: "string"
          }
        },
        {
          name: "apelido",
          apelido: "apelido",
          in: "query",
          description: "Apelido do usuário.",
          schema: {
            type: "string"
          }
        },
        {
          name: "n_sorte",
          in: "query",
          description: "Número da sorte do usuário.",
          schema: {
            type: "string"
          }
        },
        {
          name: "page",
          in: "query",
          description: "Número da página.",
          schema: {
            type: "integer",
            example: 1
          }
        }
      ],
      responses: {
        "200": {
          description: "Requisição bem-sucedida.",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/get_user"
              }
            }
          }
        },
        "404": {
          description: "Houve um erro em algum parâmetro do corpo da requisição.",
          content: {
            $ref: "#/components/schemas/erro404usuario"
          }
        },
        "500": {
          description: "Ocorreu um erro interno no servidor.",
          content: {
            $ref: "#/components/schemas/erro500"
          }
        },
      }
    },
    // post: {
    //   tags: ["Usuários"],
    //   summary: "Cria um novo usuário",
    //   security: [{ bearerAuth: [] }],
    //   requestBody: {
    //     content: {
    //       "application/json": {
    //         schema: {
    //           type: "object",
    //           properties: {
    //             nome: {
    //               type: "string",
    //               description: "Nome do usuário."
    //             },
    //             matricula: {
    //               type: "string",
    //               description: "Matrícula do usuário."
    //             },
    //             active: {
    //               type: "boolean",
    //               description: "status do usuário."
    //             },
    //             senha: {
    //               type: "string",
    //               description: "Senha do usuário."
    //             },
    //             grupo_id: {
    //               type: "integer",
    //               description: "Grupo de permissões do usuário."
    //             },
    //           },
    //           required: ["nome", "matricula", "active", "senha", "grupo_id"]
    //         }
    //       }
    //     },
    //     required: true
    //   },
    //   responses: {
    //     "201": {
    //       description: "Requisição bem-sucedida.",
    //       content: {
    //         "application/json": {
    //           schema: {
    //             $ref: "#/components/schemas/createUsuarioRes"
    //           }
    //         }
    //       }
    //     },
    //     "400": {
    //       description: "Houve um erro em algum parâmetro do corpo da requisição.",
    //       content: {
    //         $ref: "#/components/schemas/erro400usuario"
    //       }
    //     },
    //     "500": {
    //       description: "Servidor encontrou um erro interno.",
    //       content: {
    //         $ref: "#/components/schemas/erro500"
    //       }
    //     },
    //   }
    // }
  },
}

export default usuarioRoutes;