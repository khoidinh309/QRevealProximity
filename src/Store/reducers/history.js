import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../APIs/API';
import RequestStatus from './requestStatus';

export const fetchScannedLocation = createAsyncThunk(
  'history/fetchScannedData',
  async () => {
    const response = await api.get('/api/Location/GetScannedLocation');

    const responseArray =  response.data;
    return responseArray.sort((a,b) => new Date(b.creationTime) - new Date(a.creationTime));
  }
);

export const DeleteScanHistory = createAsyncThunk(
  'history/DeleteScanHistory',
  async (id, { getState }) => {
    const response = await api.delete(`/api/Location/DeleteScanable?id=${id}`,);
    return id;
  }
);

const historySlice = createSlice({
  name: 'history',
  initialState: {
    scannedData: [],
    status: RequestStatus.IDLE,
    error: null,
    allHistory: false
  },
  reducers: {
    setAllHistory: (state, action) => {
      state.allHistory = action.payload;
    },
    deleteScanHistory: (state, action) => {
      state.scannedData = state.scannedData.filter(obj => obj.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchScannedLocation.pending, (state) => {
        state.status = RequestStatus.LOADING;
        state.error = null;
      })
      .addCase(fetchScannedLocation.fulfilled, (state, action) => {
        state.status = RequestStatus.COMPLETE
        state.scannedData = action.payload;
      })
      .addCase(fetchScannedLocation.rejected, (state, action) => {
        state.status = RequestStatus.ERROR; 
        state.error = action.error.message;
      })
      .addCase(DeleteScanHistory.pending, (state) => {
        state.status = RequestStatus.LOADING;
        state.error = null;
      })
      .addCase(DeleteScanHistory.fulfilled, (state, action) => {
        state.status = RequestStatus.COMPLETE
        state.scannedData = state.scannedData.filter(obj => obj.id !== action.payload);
      })
      .addCase(DeleteScanHistory.rejected, (state, action) => {
        state.status = RequestStatus.ERROR; 
        state.error = action.error.message;
      });

  },
});

export const { setAllHistory, deleteScanHistory } = historySlice.actions;

export const selectHistory = (state) => state.history.scannedData;
export const todayHistory = (state) => state.history.scannedData.filter(obj => {
  const objDate = obj.creationTime.split('T')[0];
  const todayDate = new Date().toISOString().split('T')[0];

  return objDate === todayDate;
});

export const historyReducer =  historySlice.reducer;
