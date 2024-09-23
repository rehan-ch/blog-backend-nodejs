import { Router } from "express";
import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from "../controllers/userController.js";

const router = Router();
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);
export default router;