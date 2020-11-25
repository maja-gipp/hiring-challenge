import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'employees',
  initialState: {
    loading: false,
    list: [],
  },
  reducers: {
    employeesRequested: (stories) => {
      stories.loading = true;
    },
    employeesReceived: (stories, action) => {
      stories.list = action.payload;
      stories.loading = false;
    },
    employeesRequestFailed: (stories) => {
      stories.loading = false;
    },
  },
});

export const {
  employeesRequested,
  employeesReceived,
  employeesRequestFailed,
} = slice.actions;
export default slice.reducer;

export const employeesLoaded = () => {
  //TODO: Sprinkles '*-.-*'*-.-*'
}
