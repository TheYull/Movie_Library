import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../config/config";

export const fetchContent = createAsyncThunk(
    "content/fetchContent",
    async ({ type, category }, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${BASE_URL}/${type}/${category}`, {
          params: { api_key: API_KEY, language: "en-US", page: 1 },
        });
        return { type, data: response.data.results };
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
  );
  
