import Pokemon from '../models/pokemonModel.js';
import Players from '../models/user.model.js';

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
async function getRandomPokemonByRarity(apelido) {
  try {
    // Sorteia a raridade inicial
    let raridade = sortearRaridade();
    console.log(`Raridade sorteada: ${raridade}`);

    // Busca a quantidade total de Pokémon da raridade sorteada
    const totalPokemon = await Pokemon.countDocuments({ raridade });
    console.log(`Total de Pokémon encontrados: ${totalPokemon}`);

    if (totalPokemon === 0) {
      throw new Error(`Nenhum Pokémon encontrado para a raridade: ${raridade}`);
    }

    // Gera um índice aleatório para buscar o Pokémon correspondente
    const randomIndex = Math.floor(Math.random() * totalPokemon);
    console.log(`Index dos Pokémon encontrados: ${randomIndex}`);
    const randomPokemon = await Pokemon.findOne({ raridade }).skip(randomIndex);
    console.log(`randomPokemon encontrados: ${randomPokemon}`);
    // Busca o número da sorte do jogador
    if (!apelido) {
      const n_sorte = 1;

      const numeroSorteado = Math.floor(Math.random() * 100) + 1;
      const isShiny = numeroSorteado === n_sorte;

      console.log(`Número sorteado: ${numeroSorteado} | Número da sorte do jogador: ${n_sorte} | Shiny: ${isShiny}`);

      // Retorna o Pokémon com o status de shiny
      return { ...randomPokemon.toObject(), shiny: isShiny };
    }else{
      const player = await Players.findOne({ apelido });
      console.log(`player encontrados: ${player}`);
  
      // Sorteia um número de 1 a 100 para determinar se o Pokémon é shiny
      const numeroSorteado = Math.floor(Math.random() * 100) + 1;
      const isShiny = numeroSorteado === player.n_sorte;
  
      console.log(`Número sorteado: ${numeroSorteado} | Número da sorte do jogador: ${player.n_sorte} | Shiny: ${isShiny}`);
  
      // Retorna o Pokémon com o status de shiny
      return { ...randomPokemon.toObject(), shiny: isShiny };
    }
  } catch (error) {
    console.error('Erro no Repository:', error.message);
    throw error;
  }
}

export default {
  getRandomPokemonByRarity
};
