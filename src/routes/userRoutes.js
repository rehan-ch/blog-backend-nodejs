import { Router } from "express";
import {deleteUserById, getAllUsers, getUserById, updateUserById } from "../controllers/userController.js";
import passport from 'passport';

const router = Router();
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id',  passport.authenticate('jwt', { session: false}), updateUserById);
router.delete('/:id', passport.authenticate('jwt', { session: false}),  deleteUserById);
export default router;