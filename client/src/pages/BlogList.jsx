import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function BlogList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/api/blog')
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching blog posts:', error);
                setLoading(false);
            });
    }, []);


    if (loading) return <p>Loading...</p>;

    return (
        <div>
    <h1>Blog</h1>
    {posts.map((post) => (
      <div key={post._id}>
        <h2>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p>{post.summary}</p>
      </div>
    ))}
  </div>
    );
}
export default BlogList;