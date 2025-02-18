import React from "react";
import s from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import user_logo from "../../assets/person.svg";
import ThemeSwitcher from "../../features/theme/components/ThemeSwitcher/ThemeSwitcher";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "../Search/SearchBar";



export const Header = () => {
  const navigate = useNavigate(); 

  const movieCategories = ["Popular", "Now Playing", "Upcoming", "Top Rated"];
  const tvShowCategories = ["Popular", "Airing Today", "On Tv", "Top Rated"];
  const personCategories = ["Popular People"];
  const moreCategories = ["Info"];

  return (
    <div className={s.Header}>
      <img src={logo} alt="logo" className={s.logo}  onClick={() => navigate("/")} />
      <ul>
        <li>
          <DropdownMenu
            title="Movies"
            items={movieCategories} 
            contentType="movies"
          />
        </li>
        <li>
          <DropdownMenu
            title="TV Shows"
            items={tvShowCategories} 
            contentType="tvshows"
          />
        </li>
        <li>
          <DropdownMenu
            title="People"
            items={personCategories} 
            contentType="persons"
            isFilter={false}
          />
        </li>
        <li>
          <DropdownMenu title="More" items={moreCategories} contentType="more" isFilter={false} />
        </li>
        <li>
          <SearchBar />
        </li>
      </ul>
      <img src={user_logo} alt="user_logo" className={s.user_logo} onClick={() => navigate("/user")} />
      <ThemeSwitcher />
    </div>
  );
};
