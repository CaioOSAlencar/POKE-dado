import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
mongoose.set('strictQuery', false);

class Users {
  constructor() {

    const userSchema = new mongoose.Schema({
      nome: { type: String, required: true, unique: true, lowercase: true },
      senha: { type: String, required: true, minlength: 8 },
      mestre: { type: Boolean, required: false },
      N_SORTE: { type: Number, required: true },// .refine(N_SORTE => parseInt(N_SORTE) >0 && parseInt(N_SORTE) < 101, "Escolha um número entre 1 e 100"),   <--- Zod
      accesstoken: { type: String, required: false },
      refreshtoken: { type: String, required: false }
    }, {timestamps: true}, { versionKey: false }
  );

    userSchema.plugin(mongoosePaginate);

    this.model = mongoose.model('Players', userSchema);
  }
}
export default new Users().model;