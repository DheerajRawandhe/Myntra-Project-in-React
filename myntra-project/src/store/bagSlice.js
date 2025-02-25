import { createSlice } from '@reduxjs/toolkit';


export const bagSlice = createSlice({
  name :"bag",
  initialState : [],
  reducers : {
    addToBag : (state, action) => {
    state.push(action.payload);
      
    },
    removeFromBag : (state, action) => {
      return state.filter(itemId => itemId !== action.payload);
        
    }
  }
});

export const bagActions = bagSlice.actions;

