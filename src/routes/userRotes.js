import express from "express";
import UserController from '../controllers/userController.js';
import AuthMiddleware from '../middlewares/authMiddleware.js';
import authPermission from '../middlewares/authPermission.js';

const router = express.Router();

const userController = new UserController(); 

router
  .get("/users", AuthMiddleware, authPermission, userController.get_all_users.bind(userController))
  .post("/user/register", AuthMiddleware, authPermission, userController.registerUser.bind(userController))
  .delete("/user/delete", AuthMiddleware, authPermission, userController.deleteUser.bind(userController))
  .patch("/user/update/:id", AuthMiddleware, authPermission, userController.updateUser.bind(userController))

export default router;
