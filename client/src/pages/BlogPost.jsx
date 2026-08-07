import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';


function BlogPost( ) {
    const {slug} = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:8000/api/blog/${slug}`)
            .then((response) => response.json())
            .then((data) => {
                setPost(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching blog post:', error);
                setLoading(false);
            });
    }, [slug]);

    if (loading) return <p>Loading...</p>;
    if (!post) return <p>Post not found</p>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}
export default BlogPost;