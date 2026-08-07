import axios from 'axios';
const API_URL = 'http://localhost:8000/api/projects';
export const getProjects = async () => {
    const response = await axios.get(`${API_URL}/projects`);

    return response.data;
};