import "dotenv/config";
import app from "./src/app.js";

const PORT = process.env.PORT || 3052;

app.listen(PORT, () => {
  console.log(`FUNCIONOU, ESTÁ RODANDO NA PORTA: http://localhost:${PORT}`);
});