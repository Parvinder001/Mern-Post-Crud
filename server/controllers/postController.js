const Post = require('../model/post.model.js');

const savePost = async (request, response) => {
    console.log(request.body);
    console.log(request.file.filename);
    try {
        const post = new Post({
            title: request.body.title,
            description: request.body.description,
            image: request.file.filename,
        });
        const postData = await post.save();
        response.status(200).send({ success: true, message: "Post Save successfully Completed", data: postData });
    } catch (error) {
        response.status(400).send({ success: false, message: error.message });
    }

}

const getPosts = async (request,response) =>{

try {
        const PostsData = await Post.find();
        response.status(200).send({ success: true, message: "All Posts Data", data: PostsData });
} catch (error) {
     response.status(400).send({ success: false, message: error.message });
}
}

module.exports = { savePost ,getPosts};