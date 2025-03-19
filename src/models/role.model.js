import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  nome: { type: String, required: true }, // Exemplo: 'admin', 'player', 'mestre'
}, {
  timestamps: false, // Remove os campos createdAt e updatedAt
  versionKey: false // Remove o campo __v
});

export default mongoose.model('Role', roleSchema);
