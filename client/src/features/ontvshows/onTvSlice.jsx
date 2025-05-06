import { createSlice } from "@reduxjs/toolkit";
import { fetchOnTvShows } from "./onTvApi";

const onTvSlice = createSlice({
    name: "onTv",
    initialState: {
      onTvShows: [],
      status: "idle", // "idle" | "loading" | "succeeded" | "failed"
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchOnTvShows.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchOnTvShows.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.onTvShows = action.payload;
        })
        .addCase(fetchOnTvShows.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        });
    },
  });
  
  export default onTvSlice.reducer;
  
