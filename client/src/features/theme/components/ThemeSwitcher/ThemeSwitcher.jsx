import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../themeSlice";
import moon from "../../../../assets/moon.svg";
import sun from "../../../../assets/sun.svg";
import "./ThemeSwitcher.css";

const ThemeSwitcher = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div className="theme-switch" onClick={() => dispatch(toggleTheme())}>
      <div className={`theme-slider ${theme}`}>
        <img
          src={theme === "light" ? sun : moon}
          alt={theme === "light" ? "Сонце" : "Місяць"}
          className="theme-icon"
        />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
