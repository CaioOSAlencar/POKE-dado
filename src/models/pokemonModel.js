import mongoose from 'mongoose';

// define o esquema (schema) do pokemon
const pokemonSchema = new mongoose.Schema({
    nome: { type: String, required: true }, // nome do pokemon (obrigatorio) 
    tipo_primario: { type: String, required: true }, // tipo primario do pokemon (obrigatorio)
    tipo_segundario: { type: String, required: false }, // tipo segundario do pokemon (opcional)
    raridade: { type: String, required: true }, // raridade do pokemon (obrigatorio)
    shiny: { type: Boolean, required: true } // indica se pokemon é shiny 'uma variação'(obrigatorio)
});

// exporta o modelo 'Pokemon' criado a partir do esquema 'pokemonSchema'
export default mongoose.model('Pokemon', pokemonSchema, 'pokemons');