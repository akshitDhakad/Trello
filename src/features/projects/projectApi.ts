import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/projects';

// Fetch all projects
export const fetchProjects = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Create a new project
export const createProject = async (projectData: { name: string; description: string }) => {
  const response = await axios.post(API_URL, projectData);
  return response.data;
};

// Delete a project
export const deleteProject = async (projectId: string) => {
  await axios.delete(`${API_URL}/${projectId}`);
};
