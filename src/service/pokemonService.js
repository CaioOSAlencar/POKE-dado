import pokemonRepository from '../repositories/pokemonRepository.js';

async function getRandomPokemon() {
    const randomPokemon = await pokemonRepository.getRandomPokemon()
    return randomPokemon
}

export default {
    getRandomPokemon
}