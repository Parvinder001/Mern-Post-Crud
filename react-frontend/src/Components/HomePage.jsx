import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
function convertDate(inputFormat) {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat)
  return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/')
}
function HomePage(){
   const [Posts,SetPosts] = useState('');

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
   },[])
   
    return(
        <>
      
        
        
      
      
<div className="createPostFormMain" >
          <Container>
 <h2 className="text-white pb-5">User All Posts</h2>
<table className="table">
  <thead className="thead-dark">
    <tr>
      
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Image</th>
      <th scope="col">Created Date</th>
    </tr>
  </thead>
  <tbody>
    {Posts ?(Posts.map((post)=>(
    <tr>
      
      <td className ="title">{post.title}</td>
      <td className ="description">{post.description}</td>
      <td>{post.image}</td>
      <td>{convertDate(post.createdAt)}</td>
    </tr>
  ))):(<div>data not found</div>)}
  </tbody>
</table>

</Container>
</div>



        </>
        )
}

export default HomePage ;