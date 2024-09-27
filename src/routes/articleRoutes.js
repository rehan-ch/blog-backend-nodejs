import { Router } from "express";
import { deleteArticleById, updateArticleById, createArticle, getAllArticles, getArticleById} from "../controllers/articleController.js";

const router = Router();
router.get("/", getAllArticles);
router.get("/:id", getArticleById);
router.post("/", passport.authenticate('jwt', { session: false}), createArticle);
router.put("/:id", passport.authenticate('jwt', { session: false}), updateArticleById);
router.delete("/:id", passport.authenticate('jwt', { session: false}), deleteArticleById);
export default router;