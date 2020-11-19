import {createSlice} from '@reduxjs/toolkit';
import { apiCallBegan } from '~store/api';

const slice = createSlice({
  name: 'tasks',
  initialState: {
    loading: false,
    list: [],
  },
  reducers: {
    taskAdded: (tasks, action) => {
      tasks.list.push(action.payload)
    },
    tasksRequested: (tasks) => {
      tasks.loading = true;
    },
    tasksReceived: (tasks, action) => {
      tasks.list = action.payload;
      tasks.loading = false;
    },
    tasksRequestFailed: (tasks) => {
      tasks.loading = false;
    },
  },
});

const {
  tasksRequested,
  tasksReceived,
  tasksRequestFailed,
} = slice.actions;
export const {
  taskAdded
} = slice.actions;
export default slice.reducer;

const baseUrl = 'https://jsonplaceholder.typicode.com';
const url = '/todos';
export const tasksLoaded = () =>
  apiCallBegan({
    baseUrl,
    url,
    onStart: tasksRequested.type,
    onSuccess: tasksReceived.type,
    onError: tasksRequestFailed.type,
  });
