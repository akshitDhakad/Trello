import axios from 'axios';

interface Profile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'member' | 'guest';
}

export const fetchProfile = async () => {
  const response = await axios.get('/api/profile');
  return response.data;
};

export const updateProfile = async (profileData: Partial<Profile>) => {
  const response = await axios.put('/api/profile', profileData);
  return response.data;
};
