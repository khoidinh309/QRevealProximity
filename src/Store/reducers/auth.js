import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '@/APIs/AccountApi';
import RequestStatus from './requestStatus';
import api from '../../APIs/API';


export const loginAsync = createAsyncThunk(
  'auth/login',
  async ({ username, password }, { getState }) => {
    try {
      const response = await login({ username, password });
      api.defaults.headers.common['Authorization'] = `Bearer ${response.access_token}`;
      return response;
    } catch (error) {
      console.log(error)
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: null,
    cookie: null,
    isLoginIn: false,
    status: RequestStatus.IDLE,
    error: null
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = RequestStatus.LOADING;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = RequestStatus.COMPLETE;
        state.accessToken = action.payload.access_token;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = RequestStatus.ERROR;
        // console.log(action.payload)
      });
  }
});

export const { setToken, setCookie } = authSlice.actions;

export const authReducer =  authSlice.reducer;
