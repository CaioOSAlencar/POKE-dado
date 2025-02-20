import express from "express";
import UserController from '../controllers/userController.js';
import LoginController from "../controllers/loginController.js";

const router = express.Router();

const userController = new UserController(); 
const loginController = new LoginController();
// const tokenController = new TokenController();
// const logoutController = new LogoutController();
// const revokeController = new RevokeController();

router
  .post("/login", loginController.logar.bind(LoginController))
  // .post("/token", tokenController.token.bind(TokenController))
  // .post("/logout", logoutController.logout.bind(LogoutController))
  // .post("/revoke", revokeController.revoke.bind(RevokeController))
  .get("/users", userController.get_all_users.bind(userController))
  .post("/register", userController.registerUser.bind(userController))
  .post("/authenticate", userController.authenticateUser.bind(userController));

export default router;
