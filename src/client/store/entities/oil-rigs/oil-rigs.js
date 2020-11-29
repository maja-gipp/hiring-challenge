import {createSlice} from '@reduxjs/toolkit';
import {apiCallBegan} from "~store/api";

const slice = createSlice({
  name: 'oilRigs',
  initialState: {
    loading: false,
    list: [],
  },
  reducers: {
    oilRigsRequested: (stories) => {
      stories.loading = true;
    },
    oilRigsReceived: (stories, action) => {
      stories.list = action.payload;
      stories.loading = false;
    },
    oilRigsRequestFailed: (stories) => {
      stories.loading = false;
    },
  },
});

export const {
  oilRigsRequested,
  oilRigsReceived,
  oilRigsRequestFailed,
} = slice.actions;
export default slice.reducer;

const baseUrl = 'http://localhost:3000/api';
const url = '/oil-rigs';
export const oilRigsLoaded = () => apiCallBegan({
  baseUrl,
  url,
  onStart: oilRigsRequested.type,
  onSuccess: oilRigsReceived.type,
  onError: oilRigsRequestFailed.type,
});
