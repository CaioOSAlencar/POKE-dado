import mongoose from 'mongoose';

const rotaSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  rota: { type: String, required: true }, // Exemplo: '/pokemon', '/users'
}, {
  timestamps: false, // Remove os campos createdAt e updatedAt
  versionKey: false // Remove o campo __v
});

export default mongoose.model('Rota', rotaSchema);
