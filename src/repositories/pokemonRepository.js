import Pokemon from '../models/pokemonModel.js';

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

// Função para buscar um Pokémon aleatório baseado na raridade sorteada
async function getRandomPokemonByRarity() {
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

    console.log('Pokémon aleatório encontrado:', randomPokemon);
    return randomPokemon;
  } catch (error) {
    console.error('Erro no Repository:', error.message);
    throw error;
  }
}

//esse codigo é apagavel
async function rodarAteRaridadeDesejada(raridadeDesejada) {
    let pokemon;
    do {
      pokemon = await getRandomPokemonByRarity();
    } while (pokemon.raridade !== raridadeDesejada);
  
    console.log(`🎉 Pokémon com a raridade desejada (${raridadeDesejada}) encontrado:`, pokemon);
    return pokemon;
  }
  
  // Exemplo de uso: rodar até encontrar um Pokémon "muito raro"
  rodarAteRaridadeDesejada('lendário')
    .then(() => console.log('Busca finalizada!'))
    .catch((err) => console.error('Erro durante a busca:', err));

export default {
  getRandomPokemonByRarity
};