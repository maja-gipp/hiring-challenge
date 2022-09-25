import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "~store/api";

const slice = createSlice({
  name: "sites",
  initialState: {
    loading: false,
    list: [],
    error: false,
  },
  reducers: {
    sitesRequested: (sites) => {
      sites.loading = true;
      sites.error = false;
    },
    sitesReceived: (sites, action) => {
      sites.list = action.payload;
      sites.loading = false;
    },
    sitesRequestFailed: (sites) => {
      sites.loading = false;
      sites.error = true;
    },
  },
});

export const { sitesRequested, sitesReceived, sitesRequestFailed } =
  slice.actions;
export default slice.reducer;

const baseUrl = "http://localhost:3000/api";
const url = "/sites";
export const sitesLoaded = () =>
  apiCallBegan({
    baseUrl,
    url,
    onStart: sitesRequested.type,
    onSuccess: sitesReceived.type,
    onError: sitesRequestFailed.type,
  });
