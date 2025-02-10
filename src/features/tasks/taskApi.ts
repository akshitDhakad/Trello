import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/tasks';

// ** Fetch all tasks **
export const fetchTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// ** Create a new task **
export const createTask = async (taskData: { title: string; description: string; status: string; assignedTo: string; projectId: string }) => {
  const response = await axios.post(API_URL, taskData);
  return response.data;
};

// ** Update an existing task **
export const updateTask = async (taskData: { id: string; title?: string; status?: string }) => {
  const response = await axios.put(`${API_URL}/${taskData.id}`, taskData);
  return response.data;
};

// ** Delete a task **
export const deleteTask = async (taskId: string) => {
  await axios.delete(`${API_URL}/${taskId}`);
};
