import { createSlice } from "@reduxjs/toolkit";
import {fetchSearch} from "./searchApi";

const initialState = {
    searchResults: [],
    loading: false,
    error: null,
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearch.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSearch.fulfilled, (state, action) => {
                state.loading = false;
                state.search = action.payload;
            })
            .addCase(fetchSearch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error?.message || "Error fetching search"
            })
    }
});

export default searchSlice.reducer;