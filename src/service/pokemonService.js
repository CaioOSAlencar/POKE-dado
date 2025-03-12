// Importa o repository de Pokémon
import pokemonRepository from '../repositories/pokemonRepository.js';

// Função para buscar um Pokémon aleatório com base em raridade
async function getRandomPokemonByRarity() {
  try {
    // Chama o repository para obter o Pokémon aleatório
    const randomPokemon = await pokemonRepository.getRandomPokemonByRarity();
    return randomPokemon;
  } catch (error) {
    console.error('Erro no Service:', error.message);
    throw error; // Propaga o erro para o controller tratar
  }
}

export default {
  getRandomPokemonByRarity
};
