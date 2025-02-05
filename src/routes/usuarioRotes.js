import express from "express";
import UsuarioController from '../controllers/usuarioController.js';
// import LoginController from "../controllers/loginController.js";

const router = express.Router();

const usuarioController = new UsuarioController(); 
// const loginController = new LoginController(); 

router
  // .post("/login", loginController.logar.bind(usuarioController))
  .get("/users", usuarioController.listar.bind(usuarioController))
  // .delete("/api/gastos/:id", usuarioController.deletar.bind(usuarioController));

export default router;