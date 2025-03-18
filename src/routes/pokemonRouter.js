import express from "express";
import pokemonController from "../controllers/pokemonController.js";

// cria uma roteador do Express
const router = express.Router();

// define a rota GET '/random' para buscar um pokemon aleatorio
router.get("/pokemon/random", pokemonController.getRandomPokemon);

// exporta roteador para ser usando no servidor
export default router;
