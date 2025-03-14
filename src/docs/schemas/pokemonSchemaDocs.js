const pokemonSchema = {
  randomPokemonResponse: {
    type: "object",
    example: {
      _id: "67a66d3fe214bec50e484631",
      nome: "Rattata",
      tipo_primario: "Normal",
      tipo_secundario: "",
      raridade: "muito comum",
      shiny: false
    }
  },
  error404Pokemon: {
    type: "object",
    example: {
      error: true,
      code: 404,
      message: "Nenhum Pokémon encontrado.",
      errors: [],
      data: []
    }
  },
  error500: {
    type: "object",
    example: {
      error: true,
      code: 500,
      message: "Erro ao buscar Pokémon aleatório.",
      errors: ["Erro interno no servidor."],
      data: []
    }
  }
};

export default pokemonSchema;
