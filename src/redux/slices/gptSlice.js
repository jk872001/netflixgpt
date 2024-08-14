import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchResults: null,
  },
  reducers: {
    addGPTSearchResult: (state, action) => {
      state.gptSearchResults = action.payload;
    },
  },
});

export const { addGPTSearchResult } = gptSlice.actions;
export default gptSlice.reducer;
