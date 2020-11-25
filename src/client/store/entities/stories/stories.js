import {createSlice} from '@reduxjs/toolkit';
import { apiCallBegan } from '~store/api';

const slice = createSlice({
  name: 'stories',
  initialState: {
    loading: false,
    topStories: [],
  },
  reducers: {
    storiesRequested: (stories) => {
      stories.loading = true;
    },
    storiesReceived: (stories, action) => {
      stories.topStories = action.payload;
      stories.loading = false;
    },
    storiesRequestFailed: (stories) => {
      stories.loading = false;
    },
  },
});

export const {
  storiesRequested,
  storiesReceived,
  storiesRequestFailed,
} = slice.actions;
export default slice.reducer;

const baseUrl = 'https://hacker-news.firebaseio.com/v0';
const url = '/topstories.json';
export const storiesLoaded = () =>
  apiCallBegan({
    baseUrl,
    url,
    onStart: storiesRequested.type,
    onSuccess: storiesReceived.type,
    onError: storiesRequestFailed.type,
  });
