require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')

app.use(cors({
 origin:'*'
}));
app.use(bodyParser.urlencoded({ extended: true }));
// Parse JSON bodies
app.use(bodyParser.json());



const postRouter = require('./routes/post.js');

app.use('/api/v1/', postRouter);



const PORT = process.env.SERVER_PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server is successfully running on port ${PORT}`);
})