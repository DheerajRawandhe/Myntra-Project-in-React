import { configureStore, createSlice } from '@reduxjs/toolkit';


export const fetchStatusSlice = createSlice({
  name :"fetchStatus",
  initialState : {
    fetchDone : false ,   // 'PENDING'  & 'DONE'
    currFetching :false,
    fetchDone : false ,   // 'PENDING'  & 'DONE'
  },
  reducers : {
    markFetchDone : (state) => {
      return state.fetchDone = true;
    },
    markFetchingStarted : (state) => {
      return state.currFetching = true;
    },
    markFetchingFinished : (state) => {
      return state.currFetching = false;
    }
  }
});

export const fetchStatusActions = fetchStatusSlice.actions;

 