import { createSlice } from "@reduxjs/toolkit";
import { fetchPersonCredits } from "./personCredits";

const initialState = {
    credits: [],
    loading: false,
    error: null,
  };
  
  const personFilmographySlice = createSlice({
    name: "personFilmography",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchPersonCredits.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchPersonCredits.fulfilled, (state, action) => {
          state.loading = false;
          state.credits = action.payload;
          // console.log("Person Credits in Redux:", state.credits);
        })
        .addCase(fetchPersonCredits.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload?.message || "Error fetching person credits";
        });
    },
  });
  
  export default personFilmographySlice.reducer;