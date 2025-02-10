import express from "express";
import UserController from '../controllers/UserController.js';
import LoginController from "../controllers/loginController.js";

const router = express.Router();

const userController = new UserController(); 
const loginController = new LoginController();
// const tokenController = new TokenController();
// const logoutController = new LogoutController();
// const revokeController = new RevokeController();

router
  .post("/login", loginController.logar.bind(LoginController))
  // .post("/token", asyncWrapper(tokenController.token.bind(TokenController)))
  // .post("/logout", AuthMiddleware, asyncWrapper(logoutController.logout.bind(LogoutController)))
  // .post("/revoke", AuthMiddleware, asyncWrapper(revokeController.revoke.bind(RevokeController)))
  .get("/users", userController.get_all_users.bind(userController))

export default router;