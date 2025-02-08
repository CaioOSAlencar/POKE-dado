// Importando o mongoose
import mongoose from 'mongoose';

// Definindo o Schema usando a classe Schema do mongoose
// Um esquema é uma estrutura que denife a forma do documento
const pokemonSchema = new mongoose.Schema({
    nome:{ type: String, required: true},//todo pokemon tem um nome
    tipo_primario:{ type: String, required: true},//definir o tipo primario do pokemon
    tipo_segundario:{ type: String, required: false},//definir o tipo segundario do pokemon caso tiver
    raridade:{ type: String, required: true},// definir a raridade do pokemon possivelmente(talvez isso mude dependendo do habitat)
    shiny:{ type: Boolean, required: true},//essa parte vai indicar se pokemon é uma variente shiny
})

// exporta o modelo 'pokemon' com o schema 'pokemonSchema'
// modelo é uma classe que permite interagir com uma coleção do mongo que vai ser "pokemons"
// automaticamente mongo vai pluralizar o nome do modelo para criar nome da coleção
export default mongoose.model('Pokemon', pokemonSchema);