import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  return storedTheme ? storedTheme : "light";
};

const initialState = {
  theme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", `${state.theme}`);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;