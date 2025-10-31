import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostsPage from './PostsPage'

function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`http://localhost:3001/api/posts/${id}`);
                const data = await res.json();

                setPost(data);
                document.title = `Post ${String(data.id)} - ${data.title}`;
            }
            catch (error) {
                console.error('Error occourred while getting post data: ', error);
            }
        })()
    }, [id])

    if (!post) {
        return <h1>Loading post...</h1>;
    }

    if (Object.keys(post).length === 0 ) {
        return <h1>Post not found</h1>;
    }

    return (
        <>
            <div>
                <p>Just a post with the {post.id} id and title {post.title}</p>
            </div>
        </>
    )
}

export default PostPage;