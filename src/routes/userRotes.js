import express from "express";
import UserController from '../controllers/UserController.js';
// import LoginController from "../controllers/loginController.js";

const router = express.Router();

const userController = new UserController(); 
// const loginController = new LoginController(); 

router
  // .post("/login", loginController.logar.bind(userController))
  .get("/users", userController.get_all_users.bind(userController))
  // .delete("/api/gastos/:id", userController.delete.bind(userController));

export default router;