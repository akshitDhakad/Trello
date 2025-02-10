import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const loginUser = async (email: string, password: string) => {
  const { data } = await axios.post(`${API_URL}/auth/login`, { email, password });
  return data;
};
