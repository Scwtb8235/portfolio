const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./modules/projects/project.model');
dotenv.config();

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my projects and skills.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://myportfolio.com',
    githubUrl: 'https://github.com/myusername/portfolio', 
    featured:  true,
    order: 1,
  },
  {
    title: 'Project Two',
    description: 'Description of project two.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: '',
    repoUrl: '',
    featured: false,
    order: 2,
  },
];
const Blog = require('./modules/blog/blog.model');
const posts = [
    {
    title: 'My First Blog Post',
    slug: 'my-first-blog-post',
    summary: 'A short summary of my first post.',
    content: 'This is the full content of my first blog post.',
    tags: ['intro', 'general'],
    published: true
  },
  {
    title: 'Building with MERN Stack',
    slug: 'building-with-mern-stack',
    summary: 'What I learned building a full stack app.',
    content: 'This is the full content about the MERN stack.',
    tags: ['mern', 'fullstack'],
    published: true
  }
];

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        await Project.deleteMany({});
        await Project.insertMany(projects);
        await Blog.deleteMany({});
        await Blog.insertMany(posts);
        console.log('Database seeded successfully');
        process.exit(0);
    })
    .catch((error) => {
        console.error('Error seeding database:', error);
        process.exit(1);
    });