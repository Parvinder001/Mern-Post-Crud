import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import axios from 'axios';


function CreatePost() {
     const [title, setTitle] = useState('');
     const [description, setDescription] = useState('');
     const [image, setImage] = useState('');

      
     const handleSubmit = (event)=>{
        event.preventDefault();
          const formData = new FormData();

          formData.append('title',title);
          formData.append('description',description);
          formData.append('image',image);


     axios.post('http://localhost:8000/api/v1/post', formData)
  .then(response => {
    console.log('Post created successfully');
  })
  .catch(error => {
    console.error(error);
  });

    
    }
   


  return (
         <div className="createPostFormMain" >
    <Container>
        <h2 className="text-white">Create New Post</h2>
        <div className="createPostForm" >
    <Form onSubmit={handleSubmit}>
        <div className="">
                <label className="text-left">Title</label>
                <input type="text" name="title" placeholder="Enter Post Title" className="form-control"/>
      </div>
       <div className="mt-4">
                <label className="text-left ">Description</label>
                <textarea name="description" placeholder="Enter Post Description" className="form-control"/>
     </div>
        <div className="mt-4">
                <label className="text-left ">Image</label>
                <input type="file" name="image"  className="form-control"/>
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