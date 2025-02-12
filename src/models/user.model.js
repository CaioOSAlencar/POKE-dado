import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
mongoose.set('strictQuery', false);

class Users {
  constructor() {

    const userSchema = new mongoose.Schema({
      nome: {
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
      },
      accesstoken: {
        type: String,
        required: false
      },
      refreshtoken: {
        type: String,
        required: false
      }
    },
    {
      versionKey: false
    });

    userSchema.plugin(mongoosePaginate);

    this.model = mongoose.model('Players', userSchema);
  }
}
export default new Users().model;