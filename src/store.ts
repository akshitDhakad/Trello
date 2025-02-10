import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/authSlice';
import projectReducer from '@/features/projects/projectSlice';
import taskReducer from '@/features/tasks/taskSlice';
import profileReducer from '@/features/profile/profileSlice';
import chatReducer from '@/features/chats/chatSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectReducer,
    tasks: taskReducer,
    chats: chatReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
