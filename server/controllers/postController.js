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


// Delete post api\

const deletePost = async (request, response) => {
    try {
        const PostID = request.params.postID;
        // console.log(PostID);
        await Post.findByIdAndDelete(PostID);
        response.status(200).send({success:true,message:`Record with ID ${PostID} deleted successfully.`});
    } catch (error) {
        response.status(404).send(error);
    }
}

// Get Post For Edit Post

const getEditPost = async(request,response)=>{
    try {
        const postID = request.params.posiId;
       const PostData =  await Post.findOne({_id:postID});
       response.status(200).send({success:true,PostData:PostData});
    } catch (error) {
        response.status(404).send(error.message);
    }
}
module.exports = { savePost ,getPosts,deletePost,getEditPost};