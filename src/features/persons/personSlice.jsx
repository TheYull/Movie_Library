import { createSlice } from "@reduxjs/toolkit";
import { fetchPerson } from "./personApi";

const initialState ={
    data: [],
    loading: false,
    error: null,
}

const personSlice = createSlice ({
  name: "person",
  initialState,
  reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPerson.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPerson.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchPerson.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error?.message || "Error fetching persons";

            })
    }
});

export default personSlice.reducer;