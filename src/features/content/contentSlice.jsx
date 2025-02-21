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
                if(action.payload && action.payload.type && action.payload.data){
                    const { type, data } = action.payload;
                    if (type === "movie") {
                        state.movies = data;
                    } else if (type === "tv" && action.payload.category !== "on_the_air") {
                        state.tvshows = data;
                    }
                }
                
            })
            .addCase(fetchContent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Error fetching content";
                if (action.payload === "Use fetchOnTvShows for on_the_air TV shows.") {
                    return; 
                }
            });
    },
});

export default contentSlice.reducer;

