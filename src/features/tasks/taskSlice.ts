import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTasks, createTask, updateTask, deleteTask } from '@/features/tasks/taskApi';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  assignedTo: string; // User ID
  projectId: string;
  createdAt: string;
}

interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};

// ** Async Thunks **
export const fetchAllTasks = createAsyncThunk('tasks/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const data = await fetchTasks();
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const addTask = createAsyncThunk('tasks/add', async (taskData: Omit<Task, 'id' | 'createdAt'>, { rejectWithValue }) => {
  try {
    const data = await createTask(taskData);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const editTask = createAsyncThunk(
  'tasks/edit',
  async (taskData: { id: string } & Partial<Omit<Task, 'id'>>, { rejectWithValue }) => {
    try {
      const data = await updateTask(taskData);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);


export const removeTask = createAsyncThunk('tasks/remove', async (taskId: string, { rejectWithValue }) => {
  try {
    await deleteTask(taskId);
    return taskId;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

// ** Task Slice **
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchAllTasks.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.tasks.push(action.payload);
      })
      .addCase(editTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.tasks = state.tasks.map((task) => (task.id === action.payload.id ? action.payload : task));
      })
      .addCase(removeTask.fulfilled, (state, action: PayloadAction<string>) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
