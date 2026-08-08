function About() {
  return (
    <div className="bg-gray-950 min-h-screen text-white px-8 py-12 pt-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-gray-400 text-lg mb-8">
          Hi, I'm Mulugeta — a full stack developer with experience in web development
          and a background in cybersecurity and networking.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="flex flex-wrap gap-3 mb-8">
          {['MongoDB', 'Express', 'React', 'Node.js', 'JavaScript', 'Cybersecurity', 'Networking', 'Cypress'].map((skill) => (
            <li key={skill} className="bg-gray-800 text-blue-400 px-4 py-2 rounded-lg">
              {skill}
            </li>
          ))}
        </ul>
        <a
          href="http://localhost:8000/Mulugeta_Getahun_Resume.pdf"
          download
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default About;