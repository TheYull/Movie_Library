import { createSlice } from "@reduxjs/toolkit";
import { fetchContent } from "./contentApi";

const initialState = {
    movies: [],
    tvshows: [],
    loading: false,
    error: null,
};

const contentSlice = createSlice({
    name: "content",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContent.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchContent.fulfilled, (state, action) => {
                state.loading = false;
                const { type, data } = action.payload;
                
                if (type === "movie") {
                    state.movies = data;
                } else if (type === "tv") {
                    state.tvshows = data;
                }
            })
            .addCase(fetchContent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Error fetching content";
            });
    },
});

export default contentSlice.reducer;

