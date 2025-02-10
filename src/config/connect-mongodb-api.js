import mongoose from 'mongoose'; 

// classe para gerenciar a conexão com banco de dados mongoDB
class connectDB {
    // métado para conectar com banco de dados
    static async conectar() {
        try {
            // obtem URI de conexão do mongo a partir das variaveis de ambiente
            const mongoUri = process.env.MONGODB_URL;
            console.log(`MONGO_URI utilizado: ${mongoUri}`); 

            // verifica se a URI foi definido
            if (!mongoUri) {
                throw new Error("A variável de ambiente MONGO_URI não está definida.");
            }

            // configura o Mongoose para não ser estrito com consultas
            mongoose.set("strictQuery", false);

            // configuração especifica para ambiente do desenvolvedor
            if (process.env.NODE_ENV === 'development') {
                mongoose.set('autoIndex', true);// habilita criação automatica de indices
                mongoose.set('debug', true);// habilita  logs detalhados do Mongoose
            } else {
                mongoose.set('autoIndex', false);// esse dois fazem processo inverso, eles desabilita
                mongoose.set('debug', false); 
            }

            // conecta ao banco de dados a URI
            await mongoose.connect(mongoUri);
            console.log('Conexão com o banco estabelecida!');
        } catch (error) {
            // caso acontecer um erro, exibe uma mensagem detalhado
            console.error(`Erro na conexão com o banco de dados em ${new Date()}:`, error.message, error.stack);
        }
    }

    static async desconectar() {
        try {
            // desconecta do banco de dados
            await mongoose.disconnect();
            console.log('Conexão com o banco encerrada!');
        } catch (error) {
            // caso acontecer um erro, exibe uma mensagem detalhado
            console.error(`Erro ao desconectar do banco de dados em ${new Date()}:`, error.message, error.stack);
        }
    }
}

export default connectDB;