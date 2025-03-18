import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
mongoose.set('strictQuery', false);

class Users {
  constructor() {

    const userSchema = new mongoose.Schema({
      _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
      apelido: { type: String, required: true},
      senha: { type: String, required: true, minlength: 8, select: false },
      n_sorte: { type: Number, required: true }, // .refine(N_SORTE => parseInt(N_SORTE) >0 && parseInt(N_SORTE) < 101, "Escolha um número entre 1 e 100"),   <--- Zod
      role_id: { type: mongoose.Schema.Types.ObjectId, required: false },
      mesa_id: { type: Number, required: false },
      historico_rolls:{ type: [Number], required: false },
      accesstoken: { type: String, required: false },
      refreshtoken: { type: String, required: false }
    }, { 
      timestamps: false, // Remove  os campos createdAt e updatedAt
      versionKey: false // Remove o campo __v
    });

    userSchema.plugin(mongoosePaginate);

    this.model = mongoose.model('Players', userSchema);
  }
}
export default new Users().model;