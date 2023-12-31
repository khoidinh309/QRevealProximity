import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../APIs/API';
import RequestStatus from './requestStatus';

// Async thunk function for finding a location by name
export const fetchLocationInformation = createAsyncThunk(
  'location/findLocationByName',
  async ({name, address, description}) => {
    const data = {
      name: name,
      address: address,
      description: description
    }
    const response = await api.post('/api/Location/GetLocationInfo', data);
    return response.data;
  }
);

// Location slice
const locationSlice = createSlice({
  name: 'location',
  initialState: {
    location: {
      name: '',
      address: '',
      description: ''
    },
    status: RequestStatus.IDLE,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocationInformation.pending, (state) => {
        state.status = RequestStatus.LOADING;
        state.error = null;
      })
      .addCase(fetchLocationInformation.fulfilled, (state, action) => {
        state.location.name = action.payload.name;
        state.location.address = action.payload.address;
        state.location.description = action.payload.description;
        state.status = RequestStatus.COMPLETE;
      })
      .addCase(fetchLocationInformation.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = RequestStatus.ERROR;
      });
  }
});

// Export the location slice reducer and actions
export const { reducer: locationReducer } = locationSlice;