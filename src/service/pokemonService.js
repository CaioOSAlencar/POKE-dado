// importa o repositorio de pokemon 
import pokemonRepository from '../repositories/pokemonRepository.js';

// função para buscar um pokemon aleatorio
async function getRandomPokemon() {
    
    // chama o repositorio para buscar pokemon aleatorio
    const randomPokemon = await pokemonRepository.getRandomPokemon();
    
    // retorna o pokemon encontrado
    return randomPokemon;
}

export default {
    getRandomPokemon
};