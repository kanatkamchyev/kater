import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from '../index';


export interface currentBestler {
    currentBestler: boolean;
  }


  const initialState: currentBestler = {
    currentBestler: false,
  };

const bestlerSlice = createSlice({
    name: 'bestler',
    initialState,
    reducers:{
        setCurrentBestler: (state, action) =>{
            state.currentBestler = action.payload
        },
       
    },

    extraReducers: {
        [HYDRATE]: (state, action) => {
          return {
            ...state,
            ...action.payload.bestler,
          };
        },
      },
})


export const {setCurrentBestler} = bestlerSlice.actions;


export default bestlerSlice.reducer;