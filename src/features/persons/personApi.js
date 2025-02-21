import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../../config/config"; 

export const fetchPerson = createAsyncThunk(
  "person/fetchPerson",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${BASE_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
        
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
    }
      
      const data = await response.json();
      return data.results;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

export const fetchPersonDetails = createAsyncThunk(
  "person/fetchPersonDetails",
  async (id, { rejectWithValue }) => {
      const url = `${BASE_URL}/person/${id}?api_key=${API_KEY}&language=en-US`;
      // console.log("Fetch URL:", url);

      try {
          const response = await fetch(url);

          if (!response.ok) {
              const errorData = await response.json();
              // console.error("API Error:", errorData);
              return rejectWithValue(errorData);
          }

          const data = await response.json();
          // console.log("API Response:", data);
          return data;
      } catch (error) {
          // console.error("Fetch Error:", error);
          return rejectWithValue({ message: error.message });
      }
  }
);