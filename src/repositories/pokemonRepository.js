// importa o modelo de pokemon
import Pokemon from '../models/pokemonModel.js';

// função para buscar um pokemon aleatorio no banco de dados
async function getRandomPokemon() {
  try {
      // conta o numero total de pokemon na coleção do banco
      const totalPokemon = await Pokemon.countDocuments();
      if (totalPokemon === 0) {
          return null;
      }

      // gera um indece aleatorio com base no numero total de pokemon
      const randomIndex = Math.floor(Math.random() * totalPokemon);
      console.log(`Índice aleatório gerado: ${randomIndex}`);

      // busca um pokemon aleatorio na coleção, pulando os primeiros 'randomIndex'
      const randomPokemon = await Pokemon.findOne().skip(randomIndex);
      console.log('Pokémon aleatório encontrado:', randomPokemon);

      // retorna o pokemon aleatorio encontrado
      return randomPokemon;
  } catch (error) {
      // caso acontecer um erro, exibe uma mensagem detalhado
      console.error('Erro no repositório:', error.message, error.stack);
      throw error; 
  }
}

export default {
    getRandomPokemon
};
