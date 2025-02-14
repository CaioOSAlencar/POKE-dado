// Controller para Pokémon
import pokemonService from '../service/pokemonService.js';

// Função para buscar um Pokémon aleatório baseado em raridade
async function getRandomPokemon(req, res) {
  try {
    // Chama o serviço para obter o Pokémon aleatório
    const randomPokemon = await pokemonService.getRandomPokemonByRarity();

    // Verifica se não encontrou nenhum Pokémon
    if (!randomPokemon) {
      return res.status(404).json({ error: "Nenhum Pokémon encontrado." });
    }

    // Retorna o Pokémon encontrado em formato JSON
    res.json(randomPokemon);
  } catch (error) {
    // Retorna um erro detalhado, caso ocorra
    console.error("Erro no Controller:", error.message);
    res.status(500).json({ error: "Erro ao buscar Pokémon aleatório." });
  }
}

export default {
  getRandomPokemon
};
