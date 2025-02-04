import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
mongoose.set('strictQuery', false);

class Usuarios {
  constructor() {

    const usuarioSchema = new mongoose.Schema({
      nome: {
        type: String, required: true
      },
      email: {
        type: String, required: true
      },
      senha: {
        type: String, required: true
      },
      mestre: {
        type: Boolean, required: true
      },
      N_SORTE: {
        type: Number, required: true
      }
    },
    {
      versionKey: false
    });

    usuarioSchema.plugin(mongoosePaginate);

    this.model = mongoose.model('Players', usuarioSchema);
  }
}
export default new Usuarios().model;