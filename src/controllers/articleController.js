import Article from "../models/Article.js";
import ErrorResponse from "../utils/errorHandler.js";
import { validateObjectId } from "../utils/validate.js";
import { successResponse } from "../utils/response.js";

export const getAllArticles = async (req, res, next) => {
  try {
    const articles = await Article.find();
    successResponse(res, articles, 'Articles fetched successfully');
  } catch (error) {
    next(error);
  }
};

export const getArticleById = async (req, res, next) => {
  const { id } = req.params;

  try {
    validateObjectId(id, 'Article');

    const article = await Article.findById(id);
    if (!article) {
      return next(new ErrorResponse('Article Not Found', 404));
    }

    successResponse(res, article, 'Article fetched successfully');
  } catch (error) {
    next(error);
  }
};

export const createArticle = async (req, res, next) => {
  const { title, content, author } = req.body;

  try {
    const newArticle = new Article({ title, content, author });
    const savedArticle = await newArticle.save();
    successResponse(res, savedArticle, 'Article created successfully', 201);  // 201 Created
  } catch (error) {
    next(error);
  }
};

export const updateArticleById = async (req, res, next) => {
  const { id } = req.params;
  const { title, content, author } = req.body;

  try {
    validateObjectId(id, 'Article');

    const updatedArticle = await Article.findByIdAndUpdate(
      id,
      { title, content, author },
      { new: true, runValidators: true }
    );

    if (!updatedArticle) {
      return next(new ErrorResponse('Article Not Found', 404));
    }

    successResponse(res, updatedArticle, 'Article updated successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteArticleById = async (req, res, next) => {
  const { id } = req.params;

  try {
    validateObjectId(id, 'Article');

    const deletedArticle = await Article.findByIdAndDelete(id);
    if (!deletedArticle) {
      return next(new ErrorResponse('Article Not Found', 404));
    }

    successResponse(res, deletedArticle, 'Article deleted successfully');
  } catch (error) {
    next(error);
  }
};
