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
          name: "role",
          in: "query",
          description: "Categoria do usuário.",
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
  },
  "/user/register": {
    post: {
      tags: ["Usuários"],
      summary: "Registra um novo usuário",
      security: [{ bearerAuth: [] }],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                apelido: {
                  type: "string",
                  description: "Apelido do usuário.",
                  example: "AshKetchum"
                },
                senha: {
                  type: "string",
                  description: "Senha do usuário.",
                  example: "mypassword123"
                },
                n_sorte: {
                  type: "integer",
                  description: "Número da sorte do usuário.",
                  example: 42
                },
                role: {
                  type: "string",
                  description: "Função do usuário.",
                  example: "admin"
                },
                mesa_id: {
                  type: "integer",
                  description: "ID da mesa associada ao usuário.",
                  example: 1
                },
                historico_rolls: {
                  type: "array",
                  description: "Histórico de rolls do usuário.",
                  items: {
                    type: "integer"
                  },
                  example: [1, 2, 3, 4]
                }
              },
              required: ["apelido", "senha", "n_sorte"]
            }
          }
        },
        required: true
      },
      responses: {
        "201": {
          description: "Usuário registrado com sucesso.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  error: false,
                  code: 201,
                  message: "Usuário registrado com sucesso.",
                  data: {
                    _id: "67b76e819684a2194b7749ba",
                    apelido: "AshKetchum",
                    n_sorte: 42,
                    role: "admin",
                    mesa_id: 1,
                    historico_rolls: [1, 2, 3, 4]
                  }
                }
              }
            }
          }
        },
        "400": {
          description: "Erro na requisição.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  error: true,
                  code: 400,
                  message: "Campos obrigatórios faltando ou inválidos.",
                  errors: ["A senha deve ter pelo menos 8 caracteres."]
                }
              }
            }
          }
        },
        "500": {
          description: "Erro interno no servidor.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  error: true,
                  code: 500,
                  message: "Erro ao registrar o usuário.",
                  errors: ["Erro interno no servidor."]
                }
              }
            }
          }
        }
      }
    }
  },
  "/user/delete": {
    delete: {
      tags: ["Usuários"],
      summary: "Deleta um usuário pelo apelido",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "apelido",
          in: "query",
          description: "Apelido do usuário a ser deletado.",
          required: true,
          schema: {
            type: "string",
            example: "AshKetchum"
          }
        }
      ],
      responses: {
        "200": {
          description: "Usuário deletado com sucesso.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  error: false,
                  code: 200,
                  message: "Usuário deletado com sucesso."
                }
              }
            }
          }
        },
        "400": {
          description: "Erro na requisição.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  error: true,
                  code: 400,
                  message: "Apelido é obrigatório.",
                  errors: ["Apelido não fornecido."]
                }
              }
            }
          }
        },
        "500": {
          description: "Erro interno no servidor.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  error: true,
                  code: 500,
                  message: "Erro ao deletar o usuário.",
                  errors: ["Erro interno no servidor."]
                }
              }
            }
          }
        }
      }
    }
  },
  "/user/update/{id}": {
    patch: {
      tags: ["Usuários"],
      summary: "Atualiza as informações do usuário (apelido e n_sorte).",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID do usuário a ser atualizado.",
          required: true,
          schema: {
            type: "string",
            example: "67b76e819684a2194b7749ba"
          }
        }
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                apelido: {
                  type: "string",
                  description: "Novo apelido do usuário.",
                  example: "Misty"
                },
                n_sorte: {
                  type: "integer",
                  description: "Novo número da sorte do usuário.",
                  example: 7
                }
              },
              required: []
            }
          }
        },
        required: true
      },
      responses: {
        "200": {
          description: "Usuário atualizado com sucesso.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  error: false,
                  code: 200,
                  message: "Usuário atualizado com sucesso.",
                  data: {
                    _id: "67b76e819684a2194b7749ba",
                    apelido: "Misty",
                    n_sorte: 7,
                    role: "admin",
                    mesa_id: 1,
                    historico_rolls: [1, 2, 3, 4]
                  }
                }
              }
            }
          }
        },
        "400": {
          description: "Erro na requisição (ex.: ID ausente ou inválido).",
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  error: true,
                  code: 400,
                  message: "ID do usuário é obrigatório."
                }
              }
            }
          }
        },
        "404": {
          description: "Usuário não encontrado.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  error: true,
                  code: 404,
                  message: "Usuário não encontrado."
                }
              }
            }
          }
        },
        "500": {
          description: "Erro interno no servidor.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  error: true,
                  code: 500,
                  message: "Erro interno no servidor."
                }
              }
            }
          }
        }
      }
    }
  }
};

export default usuarioRoutes;