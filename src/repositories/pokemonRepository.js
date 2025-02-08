// essa função é responsavel por estabelecer uma conexão com banco de dados
import connect from '../config/connect-mongodb-api.js'

// Importando o modelo Pokemon
import Pokemon from '../models/pokemonModel.js'


// Função responsável por buscar um pokemon aleatório no banco de dados
async function getRandomPokemon() {

    // aguarda a conexão com banco de dados
    const db = await connect()

    // acessa a coleção pokemon no banco de dados
    const pokemonCollection = db.collection('pokemon')

    // conta quantatidade de documentos na coleção
    const totalPokemon = await pokemonCollection.countDocuments()//retorna quantidade de documentos de pokemon

    // gera um indice aleatorio com base na quantiade total de documentos
    // math.random gera numero entre 0 e 1
    // usando Math.floor obtemos um indece valido
    const randomIndex = Math.floor(Math.random() * totalPokemon)

    // vai buscar um pokemon aleatorio na coleção
    // findOne retorna apenas um documento que vai corresponder com a consulta
    // skip vai pular os primeiros documentos randoIndex
    const randomPokemon = await pokemonCollection.findOne({}, { skip: randomIndex})

    // vai retorna o pokemon aleatorio encontrado
    return randomPokemon
}

// Exporta a função getRandomPokemon para que seaja usada em outras partes
export default {
    getRandomPokemon
}