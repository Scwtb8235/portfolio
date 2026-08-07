import {useEffect, useState} from 'react';
import {getProjects} from '../api/projects';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProjects()
            .then((data) => {
                setProjects(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching projects:', error);
                setLoading(false);
            });
    }, []);
    if (loading) return <p> loading... </p>;
    return (
        <div>
            <h1>Projects</h1>
            {projects.map((project) => (
                <div key={project._id}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    ); 
}
export default Projects;