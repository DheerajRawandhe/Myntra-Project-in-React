import { configureStore, createSlice } from '@reduxjs/toolkit';
// import { DEFAULT_ITEMS } from '../data/items';


export const itemsSlice = createSlice({
  name :"items",
  // initialState : DEFAULT_ITEMS,
  initialState : [],
  reducers : {
    addInitialItems : (state, action) => {
      // console.log("reducer", state, action);
      
      return action.payload;
    
    }
  }
});

export const itemsActions = itemsSlice.actions;

