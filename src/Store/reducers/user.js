import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import RequestStatus from './requestStatus';
import api from '../../APIs/API';

export const fetchUserProfile = createAsyncThunk('user/fetUserProfile', async (_, {getState}) => {
  try {
    const response = await api.get('/api/account/my-profile');
    return response.data;
  }  catch (error) {
    console.log('Loi ne' + error);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
    name: '',
    email: '',
    surname: '',
    requestStatus: RequestStatus.IDLE,
    error: null
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.requestStatus = RequestStatus.LOADING;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.userName = action.payload.userName;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.surname = action.payload.surname;
        state.requestStatus = RequestStatus.COMPLETE;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.requestStatus = RequestStatus.ERROR;
        state.error = action.payload;
      });
  }
});

export const { setName, setEmail } = userSlice.actions;

export const userReducer =  userSlice.reducer;
