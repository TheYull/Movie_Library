import { createSlice } from "@reduxjs/toolkit";
import { fetchPerson, fetchPersonDetails } from "./personApi";

const initialState = {
    data: [],
    loading: false,
    error: null,
    personDetails: null,
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
                state.error = action.payload?.message || "Error fetching persons";

            })
            .addCase(fetchPersonDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.personDetails = null;
            })
            .addCase(fetchPersonDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.personDetails = action.payload;
                // console.log("Person Details in Redux:", state.personDetails);
            })
            .addCase(fetchPersonDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message || "Error fetching person details";
                state.personDetails = null;
            });
    }
});

export default personSlice.reducer;