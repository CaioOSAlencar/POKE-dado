const usuarioSchema = {

  createUserBody: {
    type: "object",
    example: {
      apelido: "Jon Snow",
      senha: "Testando-123",
      n_sorte: 42,
      role_id: "player",
      mesa_id: null,
      historico_rolls: [
        1,
        2,
        3,
        4
      ]
    }
  },

  createUserRes: {
    type: "object",
    example: {
      error: false,
      code: 201,
      message: "Usuário registrado com sucesso.",
      data: {
        _id: "67b76e819684a2194b7749ba",
        apelido: "AshKetchum",
        n_sorte: 42,
        role_id: "admin",
        mesa_id: null,
        historico_rolls: [
          1,
          2,
          3,
          4
        ]
      }

    },
  },
  get_user: {
    type: "object",
    example: {
      error: false,
      code: 200,
      message: "Requisição bem sucedida.",
      errors: [],
      data: [
        {
          _id: 1,
          apelido: "Thalysson",
          n_sorte: 14,
          role: "admin",
          mesa_id: 1,
          historico_rolls: ["1", "2", "3", "3", "4", "6", "5", "8", "9", "100"]
        },
        {
          _id: "67d2da021c180ef043f172c0",
          apelido: "Dainerys",
          n_sorte: 3,
          role: null,
          mesa_id: null,
          historico_rolls: []
        }
      ],
      pagination: {
        totalDocs: 20,
        page: 1,
        totalPages: 2,
        pagingCounter: 1,
        hasPrevPage: false,
        hasNextPage: true,
        prevPage: null,
        nextPage: 2
      }
    }
  },

  updateUserBody: {
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
  },
  updateUserRes: {
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
  },

  erro404usuario: {
    "application/json": {
      schema: {
        type: "object",
        example: {
          error: true,
          code: 400,
          message: "Requisição com sintaxe incorreta ou outros problemas.",
          errors: ["O Zod encrontrou algum erro na requisição."],
          data: []
        }
      }
    }
  },

  erro500: {
    "application/json": {
      schema: {
        type: "object",
        example: {
          error: true,
          code: 500,
          message: "Servidor encontrou um erro interno.",
          errors: ["OCORREU UM ERRO INTERNO"],
          data: []
        }
      }
    }
  },
}

export default usuarioSchema;
