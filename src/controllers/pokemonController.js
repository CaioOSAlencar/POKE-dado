import pokemonService from '../service/pokemonService.js';

async function getRandomPokemon(req, res){
    try{
        const randomPokemon = await pokemonService.getRandomPokemon()
        res.json(randomPokemon)
    }catch(error) {
        res.status(500).json({error: "Erro ao buscar pokemon aleatorio"})
    }
}

export default {
    getRandomPokemon
}