import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, BASE_URL } from '../../config/config';

export const fetchSearch = createAsyncThunk(
    'search/fetchSearch',
    async (query, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US`);
            if (!response.ok) throw new Error("Failed to fetch persons");
            const data = await response.json();
            return data.result;
        } catch (error) {
        return rejectWithValue(error.message);
        }
    }
);