import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, Logout, Register } from '@/APIs/AccountApi';
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

export const logoutAsync = createAsyncThunk(
  'auth/logout',
  async (_, {getState}) => {
    try {
      getState().auth.accessToken = null;
      return response;
    } catch (error) {
      console.log(error)
    }
  }
);

export const registerAsync = createAsyncThunk(
  'auth/register',
  async (data) => {
    try {
      const response = await Register(data);
      return response.data.userName == data.userName;
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
    isRegister: false,
    error: null
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    }
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
      })
      .addCase(registerAsync.pending, (state) => {
        state.status = RequestStatus.LOADING;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.status = RequestStatus.COMPLETE;
        state.isRegister = action.payload;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.status = RequestStatus.ERROR;
      })
  }
});

export const { setStatus } = authSlice.actions;

export const authReducer =  authSlice.reducer;
