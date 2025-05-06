import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../../../config/config";

export const fetchPersonCredits = createAsyncThunk(
    "personFilmography/fetchPersonCredits",
        async (personId, { rejectWithValue }) => {
            try {
            const response = await fetch(
                `${BASE_URL}/person/${personId}/combined_credits?api_key=${API_KEY}&language=en-US`
            );
            if (!response.ok) throw new Error("Failed to fetch person's credits");

            const data = await response.json();
            return data.cast;
            } catch (error) {
            return rejectWithValue(error.message);
            }
        }
);