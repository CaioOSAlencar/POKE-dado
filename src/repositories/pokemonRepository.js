import Pokemon from '../models/pokemonModel.js';
import Player from '../models/playerModel.js';

// Função auxiliar para sortear uma raridade com base nas porcentagens definidas
function sortearRaridade() {
  const sorteio = Math.random() * 100;
  if (sorteio < 40) return 'muito comum'; // 40%
  if (sorteio < 70) return 'comum';      // 30%
  if (sorteio < 85) return 'incomum';    // 15%
  if (sorteio < 92) return 'raro';       // 7%
  if (sorteio < 97) return 'muito raro'; // 5%
  if (sorteio < 99) return 'místico';    // 2%
  return 'lendário';                     // 1%
}

// Função para buscar um Pokémon aleatório baseado na raridade sorteada e verificar se é shiny
async function getRandomPokemonByRarity(playerId) {
  try {
    // Sorteia a raridade inicial
    let raridade = sortearRaridade();
    console.log(`Raridade sorteada: ${raridade}`);

    // Busca a quantidade total de Pokémon da raridade sorteada
    const totalPokemon = await Pokemon.countDocuments({ raridade });
    if (totalPokemon === 0) {
      throw new Error(`Nenhum Pokémon encontrado para a raridade: ${raridade}`);
    }

    // Gera um índice aleatório para buscar o Pokémon correspondente
    const randomIndex = Math.floor(Math.random() * totalPokemon);
    const randomPokemon = await Pokemon.findOne({ raridade }).skip(randomIndex);

    // Busca o número da sorte do jogador
    const player = await Player.findById(playerId);
    if (!player) {
      throw new Error('Jogador não encontrado');
    }

    // Sorteia um número de 1 a 100 para determinar se o Pokémon é shiny
    const numeroSorteado = Math.floor(Math.random() * 100) + 1;
    const isShiny = numeroSorteado === player.n_sorte;

    console.log(`Número sorteado: ${numeroSorteado} | Número da sorte do jogador: ${player.n_sorte} | Shiny: ${isShiny}`);
    
    // Retorna o Pokémon com o status de shiny
    return { ...randomPokemon.toObject(), shiny: isShiny };
  } catch (error) {
    console.error('Erro no Repository:', error.message);
    throw error;
  }
}

export default {
  getRandomPokemonByRarity
};
