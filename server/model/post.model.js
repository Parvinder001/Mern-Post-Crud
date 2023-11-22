const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/postCrud');

const postSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }

}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;