import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/api/blog')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-white mt-10">Loading...</p>;

  return (
    <div className="bg-gray-950 min-h-screen text-white px-8 py-12 pt-20">
      <h1 className="text-4xl font-bold text-center mb-10">Blog</h1>
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        {posts.map((post) => (
          <div key={post._id} className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">
              <Link to={`/blog/${post.slug}`} className="hover:text-blue-400">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-400">{post.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;