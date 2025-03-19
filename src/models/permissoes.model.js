import mongoose from 'mongoose';

const permissoesSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  metodo: { type: [String], required: true }, // Exemplo: ['GET', 'POST', 'PATCH', 'DELETE']
  role_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true },
  rota_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Rota', required: true },
}, {
  timestamps: false, // Remove os campos createdAt e updatedAt
  versionKey: false // Remove o campo __v
});

export default mongoose.model('permissoes', permissoesSchema);
