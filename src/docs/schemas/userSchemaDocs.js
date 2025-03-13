const usuarioSchema = {

  createUserBody: {
    type: "object",
    example: {
      nome: "João",
      matricula: "123456",
      active: true,
      senha: "123456",
      grupo_id: 1
    }
  },

  createUserRes: {
    type: "object",
    example: {
      error: false,
      code: 201,
      message: "Requisição bem sucedida.",
      errors: [],
      data: {
        id: 1,
        nome: "João",
        matricula: "123456",
        active: true,
        grupo_id: 1
      }
    }
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
};

export default usuarioSchema;
