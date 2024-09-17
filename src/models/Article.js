import mongoose, { Schema } from 'mongoose';
const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    cretedAt: {
        type: Date,
        default: Date.now
    }
});

articleSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});
const Article = mongoose.model('Article', articleSchema)
export default Article;