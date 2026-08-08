import {Link} from 'react-router-dom';
function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white text-center px-4">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Mulugeta</h1>
      <p className="text-xl text-gray-400 mb-8">
        Full Stack Developer | Cybersecurity & Networking
      </p>
      
       <Link
        to="/projects"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg"
        >
        View My Work
</Link>
    </div>
  );
}

export default Home;