const express = require('express');
const multer = require('multer');
const router = express.Router();

const path = require('path');
router.use(express.static('public'));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
       
        cb(null, path.join('./public/images')); 
    },
    filename: function (req, file, cb) {
       
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });
const { savePost ,getPosts,deletePost,getEditPost,updatePost} = require('../controllers/postController.js');
router.post('/create-post', upload.single('image'), savePost);
router.get('/get-posts', getPosts);
router.get('/delete-post/:postID',deletePost)
router.get('/get-post/:posiId',getEditPost);
router.post('/update-post',upload.single('image'),updatePost);

module.exports = router;

