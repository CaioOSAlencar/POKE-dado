import express from "express";
import routes from "./routes/index.js";
import cors from "cors";
// import helmet from "helmet";
import compression from "compression";
import DbConect from './config/connect-mongodb-api.js';

await DbConect.conectar();

const app = express();
const port = 3072;
app.use(cors()); 

// app.use(helmet());

// Habilitando a compressão de respostas
app.use(compression());

// Habilitando o uso de json pelo express
app.use(express.json());

// Habilitando o uso de urlencoded pelo express
app.use(express.urlencoded({ extended: true }));

// Passando para o arquivo de rotas o app
routes(app);

app.listen(3072, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})

// exportando para o server.js fazer uso
export default app;
