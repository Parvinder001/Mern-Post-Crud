import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import axios from 'axios';

function CreatePost(){
const [statusMsg,setStatusMsg]=useState('');
  const initialPostData = {
    title: '',
    description: '',
    image: '',
  };
const [PostData , SetPostData]=useState(initialPostData);

const FilehandleChange = (e)=>{
   SetPostData({
              ...PostData,
              [e.target.name]: e.target.files[0],
             });
   }

const handleChange = (e)=>{
            SetPostData({
              ...PostData,
              [e.target.name]: e.target.value,
            });
};
   
const handleSubmit = (e)=>{
     e.preventDefault();
console.log(PostData);
  const config = {
        headers:{
              'content-type':'multipart/form-data',
        }
  }
   axios.post('http://localhost:8000/api/v1/create-post',PostData,config)
   .then(response => {
      setStatusMsg(response.data.message);
      SetPostData(initialPostData);

    console.log('Post created:', response.data);
  })
  .catch(error => {
    console.error('Error creating Post:', error);
  });
}


  return (
         <div className="createPostFormMain" >
          <Container>
            {statusMsg ? (
                 <div className="alert alert-success">
                    <strong>Success!</strong> { statusMsg }.
                </div>)
                :(<div></div>)
                
            }
        <h2 className="text-white">Create New Post</h2>
        <div className="createPostForm" >
    <Form onSubmit={handleSubmit} method="post">
        <div className="">
                <label className="text-left">Title</label>
                <input type="text" name="title" value={PostData.title} onChange={handleChange} placeholder="Enter Post Title" className="form-control"/>
      </div>
       <div className="mt-4">
                <label className="text-left ">Description</label>
                <textarea name="description" value={PostData.description}  onChange={handleChange} placeholder="Enter Post Description" className="form-control"/>
     </div>
        <div className="mt-4">
                <label className="text-left ">Image</label>
                <input type="file" name="image"   onChange={FilehandleChange} className="form-control"/>
     </div>
     <div className="mt-4">
               <input type="submit" value="Submit Post" className="btn btn-primary"/>
     </div>
    </Form>
    </div>
    </Container>
    </div>
    
  );
}

export default CreatePost;