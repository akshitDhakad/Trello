// src/features/chat/chatApi.ts
import axios from 'axios';

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  text: string;
  timestamp: string;
}

// Fetch chat messages
export const fetchMessages = async (): Promise<Message[]> => {
  const response = await axios.get('/api/chat');
  return response.data;
};

// Send a new message
export const sendMessage = async (messageData: Omit<Message, 'id' | 'timestamp'>): Promise<Message> => {
  const response = await axios.post('/api/chat', messageData);
  return response.data;
};
