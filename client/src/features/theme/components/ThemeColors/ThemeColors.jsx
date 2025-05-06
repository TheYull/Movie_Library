import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import "./dark/dark.scss";
import "./light/light.scss";

export const ThemeColors = ({ children }) => {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return <>{children}</>;
};
