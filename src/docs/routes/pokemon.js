const pokemonRoutes = {
  "/pokemon/random": {
    get: {
      tags: ["Pokemons"],
      summary: "Obtém um Pokémon aleatório baseado na raridade",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "playerId",
          in: "query",
          description: "Identificador do jogador.",
          schema: {
            type: "string",
            example: "67b76e819684a2194b7749ba"
          }
        }
      ],
      responses: {
        "200": {
          description: "Requisição bem-sucedida.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  _id: "67a66d3fe214bec50e484631",
                  nome: "Rattata",
                  tipo_primario: "Normal",
                  tipo_secundario: "",
                  raridade: "muito comum",
                  shiny: false
                }
              }
            }
          }
        },
        "404": {
          description: "Nenhum Pokémon encontrado.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  error: true,
                  code: 404,
                  message: "Nenhum Pokémon encontrado.",
                  errors: [],
                  data: []
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
                  message: "Erro ao buscar Pokémon aleatório.",
                  errors: ["Erro interno no servidor."],
                  data: []
                }
              }
            }
          }
        }
      }
    }
  }
};

export default pokemonRoutes;
