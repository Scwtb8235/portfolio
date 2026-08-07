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

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        await Project.deleteMany({});
        await Project.insertMany(projects);
        console.log('Database seeded successfully');
        process.exit(0);
    })
    .catch((error) => {
        console.error('Error seeding database:', error);
        process.exit(1);
    });