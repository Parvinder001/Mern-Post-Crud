import  axios  from 'axios';
import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
function convertDate(inputFormat) {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat)
  return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/')
}
function HomePage(){
  const [Posts, SetPosts] = useState('');
  const [DeleteMsg ,SetDeleteMSg] = useState('');

   useEffect(() => {
    
   const fetchPosts = async ()=>{
     
    try {
         const response = await fetch('http://localhost:8000/api/v1/get-posts');
         const data = await response.json();
         console.log(data.data);
         SetPosts(data.data);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
 }
fetchPosts();
   }, [])
  
  async function handelDeletePost(postId) {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/delete-post/${postId}`);
      console.log(response.data);
      if (response.data.success == true) {
        document.getElementById(postId).parentElement.remove();
        SetDeleteMSg('Record  deleted successfully.');
      }
    } catch (error) {
      console.log(error);
    }
    

}
   
    return(
        <> 
<div className="PostMainPage" >
          <Container>
            <h2 className="text-white pb-2">USER ALL POSTS</h2>
            <h3 className='text-danger'>{ DeleteMsg}</h3>
<table className="table">
  <thead className="thead-dark">
    <tr >
      
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Image</th>
      <th scope="col">Created Date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {Posts ?(Posts.map((post)=>(
    <tr>
      
      <td className ="title">{post.title}</td>
      <td className ="description">{post.description}</td>
        <td className="postImage">
          <img src={'http://localhost:8000/api/v1/images/'+post.image} width="60%" />
        </td>
      <td className='postDate'>{convertDate(post.createdAt)}</td>
     <td className='deleteIcon' id={post._id} onClick={() => handelDeletePost(post._id)}>
  <span className="glyphicon glyphicon-trash"></span>
</td>

    </tr>
  ))):(<div>Oops.......Data not found</div>)}
  </tbody>
</table>

</Container>
</div>



        </>
        )
}

export default HomePage ;