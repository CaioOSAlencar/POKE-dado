import express from "express";
import UserController from '../controllers/userController.js';
import AuthMiddleware from '../middlewares/authMiddleware.js';
import AuthPermission from '../middlewares/authPermission.js';

const router = express.Router();

const userController = new UserController(); 

router
  .get("/user", AuthMiddleware, AuthPermission.handle, userController.get_all_users.bind(userController))
  .post("/user/register", AuthMiddleware, AuthPermission.handle, userController.registerUser.bind(userController))
  .delete("/user/delete", AuthMiddleware, AuthPermission.handle, userController.deleteUser.bind(userController))
  .patch("/user/update/:id", AuthMiddleware, AuthPermission.handle, userController.updateUser.bind(userController))

export default router;
