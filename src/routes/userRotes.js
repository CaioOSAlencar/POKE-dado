import express from "express";
import UserController from '../controllers/userController.js';

const router = express.Router();

const userController = new UserController(); 

router
  .get("/users", userController.get_all_users.bind(userController))
  .post("/user/register", userController.registerUser.bind(userController))
  .delete("/user/delete", userController.deleteUser.bind(userController))

export default router;
