import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProfile, updateProfile } from '@/features/profile/profileApi';

interface Profile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'member' | 'guest';
}

interface ProfileState {
  profile: Profile | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProfileState = {
  profile: null,
  loading: false,
  error: null,
};

// ** Async Thunks **

// Fetch Profile
export const fetchUserProfile = createAsyncThunk('profile/fetch', async (_, { rejectWithValue }) => {
  try {
    return await fetchProfile();
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

// Update Profile
export const editUserProfile = createAsyncThunk(
  'profile/update',
  async (profileData: Partial<Profile>, { rejectWithValue }) => {
    try {
      return await updateProfile(profileData);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// ** Profile Slice **
const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(editUserProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(editUserProfile.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default profileSlice.reducer;
