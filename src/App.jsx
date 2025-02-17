import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { ThemeColors } from "./features/theme/components/ThemeColors/ThemeColors";
import { useMovieApi } from "./hooks/useMovieApi";

export default function App() {
  useMovieApi();
  return (
    <>
      <ThemeColors>
        <RouterProvider router={router}></RouterProvider>
      </ThemeColors>
    </>
  );
}
