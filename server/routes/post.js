const express = require('express');
const multer = require('multer');
const router = express.Router();
// Set up multer middleware
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Define the destination directory
        cb(null, './public/images'); // In this example, uploads will be stored in the 'uploads' directory
    },
    filename: function (req, file, cb) {
        // Define the filename for the uploaded file
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });
const { savePost } = require('../controllers/postController.js');
router.post('/', upload.single('image'), savePost);

module.exports = router;

