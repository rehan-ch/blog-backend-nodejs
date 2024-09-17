import Article from "../models/Article.js";
import mongoose from 'mongoose';


export const getAllArticles = async (req, res) => {
    try{
        const articles = await Article.find();
        res.json(articles);
    }
    catch(e){
        res.status(5000).json({message: "Server Error", error: e.message})
    }
};

export const getArticleById = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({ message: 'Invalid article ID format' });
    }
    try{
        const article = await Article.findById(id)
        if (!article) return res.status(400).json({message: "Article Not Found"})
        res.json(article)
    }
    catch(e){
        res.status(500).json({ message: 'Server Error', error: e.message });
    }
}

export const createArticle = async (req, res) => {
    const {title, content, author} = req.body;
    try{
        const article  = await new Article({
            title,
            content,
            author
        });
        const savedArticle = await article.save();
        res.status(201).json(savedArticle);
    }
    catch(e){
        res.status(500).json({ message: 'Server Error', error: e.message });
    }
}

export const updateArticleById = async (req, res) => {
    const { id } = req.params;
    const { title, content, author } = req.body;
    try{
        const article = await Article.findByIdAndUpdate(id, { title, content, author }, {new: true, runValidators: true})
        if(!article) return res.status(400).json({message: "Article Not Found"})
        res.status(200).json({message: "Article Updated Successfully!!"})
    }
    catch(e){
        res.status(500).json({ message: 'Server Error', error: e.message });
    }
}

export const deleteArticleById = async (req, res) => {
    const { id } = req.params;
    try{
        const deletedArticle = await Article.findByIdAndDelete(id)
        if(!deletedArticle) return req.status(400).json({message: "Artilce Not Found"});

        res.status(200).json({message: "Article Deleted Successfully!!"})
    }
    catch(e){
        res.status(500).json({message: 'Server Error', error: e.message})
    }
}