import express from 'express';
import UsersController from '../controllers/usersController.js';


const router = express.Router();

router.post("/register", UsersController.register)
router.post("/login", UsersController.login)
router.post("/setAvatar/:id", UsersController.setAvatar )
router.get("/allusers/:id", UsersController.getAllUsers)

export default router;