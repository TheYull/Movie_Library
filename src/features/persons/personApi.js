import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../../config/config"; 

export const fetchPerson = createAsyncThunk(
  "person/fetchPerson",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${BASE_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      if (!response.ok) throw new Error("Failed to fetch persons");

      const data = await response.json();
      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);