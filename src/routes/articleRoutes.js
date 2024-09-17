import { Router } from "express";
import { deleteArticleById, updateArticleById, createArticle, getAllArticles, getArticleById} from "../controllers/articleController.js";

const router = Router();
router.get("/", getAllArticles);
router.get("/:id", getArticleById);
router.post("/", createArticle);
router.put("/:id", updateArticleById);
router.delete("/:id", deleteArticleById);
export default router;