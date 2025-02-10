// src/features/chat/chatSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMessages, sendMessage } from '@/features/chats/chatApi';

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  text: string;
  timestamp: string;
}

export interface ChatState {
  messages: Message[];
  loading: boolean;
  error: string | null;
}


const initialState: ChatState = {
  messages: [],
  loading: false,
  error: null,
};

// ** Async Thunks **
export const getChatMessages = createAsyncThunk('chat/fetchMessages', async (_, { rejectWithValue }) => {
  try {
    return await fetchMessages();
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const sendChatMessage = createAsyncThunk(
  'chat/sendMessage',
  async (messageData: Omit<Message, 'id' | 'timestamp'>, { rejectWithValue }) => {
    try {
      return await sendMessage(messageData);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// ** Chat Slice **
const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getChatMessages.pending, (state) => {
        state.loading = true;
      })
      .addCase(getChatMessages.fulfilled, (state, action: PayloadAction<Message[]>) => {
        state.loading = false;
        state.messages = action.payload;
      })
      .addCase(getChatMessages.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(sendChatMessage.fulfilled, (state, action: PayloadAction<Message>) => {
        state.messages.push(action.payload);
      });
  },
});

export default chatSlice.reducer;
