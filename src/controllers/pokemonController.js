// importe o serviço de pokemon
import pokemonService from '../service/pokemonService.js';

// função para buscar um pokemon aleatorio
async function getRandomPokemon(req, res) {
    try {
        // chama o serviço para buscar um pokemon aleatorio
        const randomPokemon = await pokemonService.getRandomPokemon();
        
        // retorna o pokemon encontrado como resposta em formato JSON
        res.json(randomPokemon);
    } catch (error) {
        // caso acontecer um erro, exibe uma mensagem detalhado
        res.status(500).json({ error: "Erro ao buscar Pokémon aleatório" });
    }
}

export default {
    getRandomPokemon
};