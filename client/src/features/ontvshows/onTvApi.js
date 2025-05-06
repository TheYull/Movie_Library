import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../../config/config";

export const fetchOnTvShows = createAsyncThunk("onTv/fetchOnTvShows", async () => {
  try {
    const response = await fetch(`${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.status_message || "Failed to fetch TV shows.");
    }

    return data.results || [];
  } catch (error) {
    throw new Error(error.message || "Network error");
  }
});
