import {useParams} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import React, { useState,useEffect } from 'react';
import axios from 'axios';


const EditPost = () =>{
  var params =  useParams();
  
  const initialPostData = {
    title: '',
    description: '',
    image: '',
  };
  
const [PostData , SetPostData]=useState(initialPostData);
const [statusMsg,setStatusMsg]=useState('');
useEffect(() => {
const handelEditPost = async ()=>{

  try {
    const GetPost = await axios.get(`http://localhost:8000/api/v1/get-post/${params.id}`);
    console.log(GetPost.data.PostData);
   SetPostData(GetPost.data.PostData);
setStatusMsg(GetPost.data.PostData.mesage)
  } catch (error) {
    console.log(error);
  }
    
};
   handelEditPost(); 
  }, []);

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
   axios.post('http://localhost:8000/api/v1/update-post',PostData,config)
   .then(response => {
    
      SetPostData(initialPostData);
      setStatusMsg(response.data.message);
    console.log('Post created:', response.data);
   
  })
  .catch(error => {
    console.error('Error creating Post:', error);
  });
}
  return (
         <div className="createPostFormMain" >
          
        {statusMsg ? (
                 <div className="alert alert-success">
                    <strong>Success!</strong> { statusMsg }.
                </div>)
                :(<div></div>)
                
        }
          <div className="homeBanner" >
          <img src="https://elearningbozp.sk/wp-content/uploads/2020/02/4-e1633504565248.png" width="330" alt="Description of the images" />
        </div>
        
        <div className="createPostForm" >
          <h2 className="text-white">Update Post</h2>
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
 
    </div>
    
  );

}

export default EditPost;