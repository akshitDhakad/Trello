import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProjects, createProject, deleteProject } from '@/features/projects/projectApi';

interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'archived';
}

interface ProjectState {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

const initialState: ProjectState = {
  projects: [],
  loading: false,
  error: null,
};

// Async Thunks
export const fetchAllProjects = createAsyncThunk('projects/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const data = await fetchProjects();
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const addProject = createAsyncThunk('projects/add', async (projectData: { name: string; description: string }, { rejectWithValue }) => {
  try {
    const data = await createProject(projectData);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const removeProject = createAsyncThunk('projects/remove', async (projectId: string, { rejectWithValue }) => {
  try {
    await deleteProject(projectId);
    return projectId;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProjects.fulfilled, (state, action: PayloadAction<Project[]>) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(fetchAllProjects.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addProject.fulfilled, (state, action: PayloadAction<Project>) => {
        state.projects.push(action.payload);
      })
      .addCase(removeProject.fulfilled, (state, action: PayloadAction<string>) => {
        state.projects = state.projects.filter((project) => project.id !== action.payload);
      });
  },
});

export default projectSlice.reducer;
