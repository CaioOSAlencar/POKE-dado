import Pokemon from '../models/pokemonModel.js';

// Função auxiliar para sortear uma raridade com base nas porcentagens definidas
function sortearRaridade() {
  const sorteio = Math.random() * 100;
  if (sorteio < 50) return 'muito comum';
  if (sorteio < 75) return 'comum';
  if (sorteio < 90) return 'incomum';
  if (sorteio < 97) return 'raro';
  if (sorteio < 99) return 'muito raro';
  return 'especial'; // Para Místico ou Lendário (re-roleta)
}

// Função para buscar um Pokémon aleatório baseado na raridade sorteada
async function getRandomPokemonByRarity() {
  try {
    // Sorteia a raridade inicial
    let raridade = sortearRaridade();

    // Se a raridade for 'especial', faz um novo sorteio para decidir entre Místico e Lendário
    if (raridade === 'especial') {
      raridade = Math.random() < 0.7 ? 'místico' : 'lendário';
    }

    console.log(`Raridade sorteada: ${raridade}`);

    // Busca a quantidade total de Pokémon da raridade sorteada
    const totalPokemon = await Pokemon.countDocuments({ raridade });
    if (totalPokemon === 0) {
      throw new Error(`Nenhum Pokémon encontrado para a raridade: ${raridade}`);
    }

    // Gera um índice aleatório para buscar o Pokémon correspondente
    const randomIndex = Math.floor(Math.random() * totalPokemon);
    const randomPokemon = await Pokemon.findOne({ raridade }).skip(randomIndex);

    console.log('Pokémon aleatório encontrado:', randomPokemon);
    return randomPokemon;
  } catch (error) {
    console.error('Erro no Repository:', error.message);
    throw error;
  }
}

export default {
  getRandomPokemonByRarity
};
