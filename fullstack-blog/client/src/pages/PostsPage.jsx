import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const {id} = useParams();
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/posts');
        const data = await res.json();
        setPosts(data);
      }
      catch (error) {
        console.log(error);
      }
    }
    
    fetchPosts();
  }, []);

  return <ul>
    {posts.map((post) => (
      <li key={post.id}>
        <Link to={`/posts/${post.id}`}> {post.title} </Link>
      </li>
    ))}
  </ul>;
}

export default PostsPage;