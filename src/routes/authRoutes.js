import express from "express";
import AuthController from '../controllers/authController.js';
import authPermission from '../middlewares/AuthPermission.js';

const router = express.Router();

const authController = new AuthController();

router  
  .post("/login", authController.login.bind(authController))
  .post("/logout", authController.logout.bind(authController))
  .post("/renoveToken", authController.renoveToken.bind(authController))

export default router;