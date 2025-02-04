import mongoose from 'mongoose'; 

class connectDB {
    static async conectar() {
        try {
            const mongoUri = process.env.MONGODB_URL;
            console.log(`MONGO_URI utilizado: ${mongoUri}`); 

            if (!mongoUri) {
                throw new Error("A variável de ambiente MONGO_URI não está definida.");
            }

            mongoose.set("strictQuery", false);

            if (process.env.NODE_ENV === 'development') {
                mongoose.set('autoIndex', true); 
                mongoose.set('debug', true); 
            } else {
                mongoose.set('autoIndex', false); 
                mongoose.set('debug', false); 
            }

            await mongoose.connect(mongoUri);
            console.log('Conexão com o banco estabelecida!');
        } catch (error) {
            console.error(`Erro na conexão com o banco de dados em ${new Date()}:`, error.message, error.stack);
        }
    }

    static async desconectar() {
        try {
            await mongoose.disconnect();
            console.log('Conexão com o banco encerrada!');
        } catch (error) {
            console.error(`Erro ao desconectar do banco de dados em ${new Date()}:`, error.message, error.stack);
        }
    }
}

export default connectDB;