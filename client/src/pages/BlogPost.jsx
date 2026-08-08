import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/api/blog/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <p className="text-center text-white mt-10">Loading...</p>;
  if (!post) return <p className="text-center text-white mt-10">Post not found.</p>;

  return (
    <div className="bg-gray-950 min-h-screen text-white px-8 py-12 pt-20">
      <div className="max-w-2xl mx-auto">
        <Link to="/blog" className="text-blue-400 hover:underline mb-6 block">
          ← Back to Blog
        </Link>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-400 mb-8">{post.summary}</p>
        <p className="text-gray-300 leading-relaxed">{post.content}</p>
        <div className="flex flex-wrap gap-2 mt-8">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-blue-500 text-white text-sm px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPost;